import axios from 'axios';
import { LOAD_PROFILE_SUCCESS, LOAD_ACCOUNTS_INFO_SUCCESS, GET_DELIVER_STATUS_SUCCESS, GET_USER_INFO_SUCCESS } from '../constants/profile';
import { getAuthHeader } from './auth';
import { loadPublicNotificationsRequest } from '../actions/publicNotification';
import { loadPrivateNotificationsRequest } from '../actions/privateNotification';
import { setLoading } from '../actions/loading';
import { push } from "react-router-redux";


export const loadProfileSuccess = (profile, documents) => {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile,
    documents
  }
};

export const loadAccountsInfoSuccess = (currentAccount, accounts) => ({
  type: LOAD_ACCOUNTS_INFO_SUCCESS,
  currentAccount,
  accounts
});

export const getDeliverStatusSuccess = (hasFinishReading) => ({
  type: GET_DELIVER_STATUS_SUCCESS,
  hasFinishReading,
})

export const getUserInfoSuccess = (userInfo) => ({
  type: GET_USER_INFO_SUCCESS,
  userInfo,
})

export const loadProfileRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true));
    const request = axios
      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
        headers: getAuthHeader()
      });

    return request
      .then((response) => {
        const profile = response.data.data.profile;
        const name = profile.name_kanji;
        const marginAccountStatus = profile.margin_account_status;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('marginAccountStatus', marginAccountStatus);
        const documents = response.data.data.documents;
        dispatch(loadProfileSuccess(profile, documents));
        dispatch(loadPublicNotificationsRequest());
        dispatch(loadPrivateNotificationsRequest());
        setTimeout(() => { //Delay redirect to update stock lending status
          const redirect = sessionStorage.getItem('redirectUrl');
          if (redirect) {
            dispatch(push(redirect));
            sessionStorage.removeItem('redirectUrl')
          }
          dispatch(setLoading(false))
        }, 100)
      });
  };
};

export const getDeliverStatus = (params) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))

    const request = axios
      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
        headers: getAuthHeader()
      });

    return request
      .then(({ data: { data } }) => {
        const documents = data.documents;
        const readedDocuments = documents.filter(edocument => edocument.deliver_status === '0').length;
        if (readedDocuments === 0) {
          dispatch(getDeliverStatusSuccess(true))
        } else {
          alert('??????????????????????????????????????????????????????????????????????????????????????????')
        }
        dispatch(setLoading(false))
      });
  };
};

export const loadAccountsInfoRequest = () => {
  return dispatch => {
    dispatch(setLoading(true));
    const request = axios
      .get(`${process.env.REACT_APP_OPENACCOUNT_API_HOST}/v4/userAccounts`, {
        headers: getAuthHeader()
      });

    return request
      .then(({ data: { currentAccount, accounts } }) => {
        const mainAccount = accounts.filter(account => account && account.type === 'MAIN')[0];
        sessionStorage.setItem('currentAccountType', currentAccount.type);
        sessionStorage.setItem('mainAccount', mainAccount.rpId);
        dispatch(loadAccountsInfoSuccess(currentAccount, accounts));
        // currentAccount.branchCode !== '235' && dispatch(createError("?????????????????????????????????????????????"));
        dispatch(setLoading(false))
      });
  };
};

export const loadUserInfoRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const url = `${process.env.REACT_APP_ACCOUNT_MANAGER_API}/v5/users`;
    const request = axios
      .get(url, {
        headers: getAuthHeader()
      });

    return request.then((response) => {
      dispatch(getUserInfoSuccess(response.data));
      dispatch(setLoading(false))
    });
  };
};
