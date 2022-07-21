import { push } from 'react-router-redux';
import axios from 'axios';
import qs from 'qs';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  EXPIRED_TOKEN,
  SET_ANTI_SOCIAL
} from '../constants/auth';
import { getToken } from '../utils';
import { setLoading } from './loading'
import { loadAccountsInfoRequest } from "./profile";
import Amplify from "../auth/amplify";

export const getAuthHeader = () => {
  return {
    Authorization: `Bearer ${getToken()}`
  }
}

export const getHeaderEnigma = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
    "X-ORDER-CHANNEL": "BCP"
  }
}

export const setHeader = (params) => {
  return {
    params: params,
    paramsSerializer: params =>
      qs.stringify(params, { arrayFormat: "repeat" }),
    headers: getAuthHeader()
  }
}
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const setAntiSocial = (isAntiSocial) => {
  return {
    type: SET_ANTI_SOCIAL,
    isAntiSocial
  }
}

export const invalidToken = () => {
  return {
    type: EXPIRED_TOKEN
  }
}

export const loginRequest = (authz_code, user_id) => {
  return dispatch => {
    dispatch(setLoading(true))
    const amplify = new Amplify({
      authzCode: authz_code,
      baasId: user_id,
    });
    return amplify.login()
      .then((result) => {
        const session = result.getSignInUserSession();
        if (session) {
          const authToken = session.getAccessToken().getJwtToken()
          sessionStorage.setItem('token', authToken)
          sessionStorage.setItem('is_unconfirmed', 'true')
          dispatch(accountStatusRequest())
          dispatch(ruleOfClosingRequest())
          dispatch(ruleOfEmergencyRequest())
        } else {
          dispatch(setLoading(false))
          dispatch(push('/account/login'))
        }
      })
      .catch(error => {
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data.message
        }
        dispatch(loginFailure(errorMessage))
        dispatch(setLoading(false))
        dispatch(push('/account/login'))
      })
  };
}

const ruleOfClosingRequest = () => (dispatch => {
  const url = `${process.env.REACT_APP_ENIGMA_API_HOST}/bcp/closing`
  const options = {
    headers: getAuthHeader()
  }
  return axios.get(url,options)
    .then(response => {
      const data = response.data;
      sessionStorage.setItem('bankClosing', data.bank_closing_flag);
      sessionStorage.setItem('securityClosing', data.security_closing_flag);
    })
    .catch(error => {
      let errorMessage = '';
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      dispatch(loginFailure(errorMessage));
      dispatch(setLoading(false))
    })
})

const ruleOfEmergencyRequest = () => (dispatch => {
  const url = `${process.env.REACT_APP_ENIGMA_API_HOST}/bcp/emergency`
  const options = {
    headers: getAuthHeader()
  }
  return axios.get(url,options)
    .then(response => {
      const data = response.data;
      sessionStorage.setItem('emergency', data.emergency_flag);
    })
    .catch(error => {
      let errorMessage = '';
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      dispatch(loginFailure(errorMessage));
      dispatch(setLoading(false))
    })
})

const stockAndOrderRequest = () => (dispatch => {
  const balanceStockUrl = `${process.env.REACT_APP_ENIGMA_API_HOST}/user/balance/stocks`
  const orderUrl = `${process.env.REACT_APP_ENIGMA_API_HOST}/orders`
  const options = {
    headers: getAuthHeader()
  }
  const balanceStockRequest = axios.get(balanceStockUrl, options)
  const orderRequest = axios.get(orderUrl, options)
  return axios.all([balanceStockRequest, orderRequest])
  .then(axios.spread((balanceStockResponse, orderResponse) => {
    dispatch(profileRequest())
  }))
    .catch(error => {
      const errorStatus = error.response ? error.response.status : null;
      (errorStatus === 400 || errorStatus === 500) && sessionStorage.setItem('stock_order_err', 'yes')
      dispatch(goToLoginPage())
    })
})


const accountStatusRequest = () => (dispatch => {
  dispatch(setLoading(true))
  const statusUrl = `${process.env.REACT_APP_ENIGMA_API_HOST}/status`
  const options = {
    headers: getAuthHeader()
  }
  sessionStorage.setItem('stock_order_err', 'no')
  sessionStorage.setItem('account_status', 'available') //default value

  return axios.get(statusUrl, options)
    .then(({ data: items }) => {
      const isOpenAccount = items.openAccount.status === 'NONE' ? false : true;
      if(!isOpenAccount){
        sessionStorage.setItem('account_status', 'none')
        dispatch(goToLoginPage())
        dispatch(setLoading(false))
      }
      else{ //account status is AVAILABLE or CLOSE
        dispatch(stockAndOrderRequest())
        dispatch(setLoading(false))
      }
    })
    .catch(error => {
      const errorStatus = error.response ? error.response.status : null;
      (errorStatus === 400 || errorStatus === 500) && sessionStorage.setItem('stock_order_err', 'yes')
      dispatch(goToLoginPage())
      dispatch(setLoading(false))
    }
    )
})

const profileRequest = () => {
  return dispatch => {
    const profileRequest = axios
      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
        headers: getAuthHeader()
      });
    return profileRequest
      .then((response) => {
        const name = response.data.data.profile.name_kanji;
        const marginAccountStatus = response.data.data.profile.margin_account_status;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('marginAccountStatus', marginAccountStatus);
        dispatch(loginSuccess());
        dispatch(loadAccountsInfoRequest(true))
        const redirect = sessionStorage.getItem('redirectUrl') || '/account';
        setTimeout(() => { //Delay redirect to update stock lending status
          dispatch(push(redirect));
          sessionStorage.removeItem('redirectUrl');
          dispatch(setLoading(false))
        }, 100)
      })
      .catch(error => {
        sessionStorage.removeItem('token');
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data.message;
        }
        dispatch(loginFailure(errorMessage));
        dispatch(setLoading(false))
      });
  }
}

export const logoutRequest = () => {
  return dispatch => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentAccountType');
    dispatch(logoutSuccess());
    dispatch(push('/account/logout'));
  }
}

export const invalidTokenLogoutRequest = () => {
  return dispatch => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentAccountType');
    dispatch(logoutSuccess());
    dispatch(push('/account/login'));
  }
}

export const goToLoginPage = () => {
  return dispatch => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentAccountType');
    dispatch(logoutSuccess());
    dispatch(push('/account/go-to-login'));
  } 
}

export const goToBassAuthFontSignin= () => {
  return dispatch => {
    dispatch(setLoading(true));
    window.location.replace(`${process.env.REACT_APP_POC_URL}/enigma/signin`);
  }
}
