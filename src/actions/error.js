import { CREATE_ERROR, DELETE_ERROR } from '../constants/error';
import { invalidToken } from './auth';
import { isTokenExpired } from '../utils';
import { setLoading } from '../actions/loading';
import { push } from 'react-router-redux';
import { logoutSuccess } from './auth';

export const handleErrors = (error, lastAction) => (dispatch, getState) => {
  if (error.response) {
    let errorMessage = '';
    const errorCode = error.response.data.code;
    const errorStatus = error.response ? error.response.status : null;
    const errorMsg = error.response.data.message;

    dispatch(setLoading(false))
    if (isTokenExpired()) {
      dispatch(invalidToken());
    } else {
      errorMessage = errorCode ? `${errorMsg} [${error.response.data.code}]` : errorMsg;
      if(errorStatus === 503) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('currentAccountType');
        dispatch(logoutSuccess());
        dispatch(push('/account/go-to-login'));
      }
      else{
      dispatch(createError(errorMessage))
      }
    }
  }
}

export const createError = (error) => {
  return {
    type: CREATE_ERROR,
    error
  }
}

export const deleteError = () => {
  return {
    type: DELETE_ERROR
  }
}
