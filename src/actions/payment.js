import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOAD_CASH_TRANSFER_SUCCESS,
  LOAD_CASH_WITHDRAWAL_SUCCESS,
  SAVE_WITHDRAWAL_AMOUNT,
  WITHDRAWAL_SUCCESS
} from '../constants/payment';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';

export const loadCashTransferSuccess = (cashTransfer) => {
  return {
    type: LOAD_CASH_TRANSFER_SUCCESS,
    cashTransfer
  }
}

export const loadCashWithdrawalSuccess = (cashWithdrawal) => {
  return {
    type: LOAD_CASH_WITHDRAWAL_SUCCESS,
    cashWithdrawal
  }
}

export const saveWithdrawalAmount = (amount) => {
  return {
    type: SAVE_WITHDRAWAL_AMOUNT,
    amount
  }
}

export const withdrawalSuccess = () => {
  return {
    type: WITHDRAWAL_SUCCESS
  }
}

export const loadCashTransferRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_ACCOUNT_MANAGER_API}/v4/virtualAccounts`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadCashTransferSuccess(response.data.bank));
      dispatch(setLoading(false))
    });
  };
}

export const loadCashWithdrawalRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/cashout_info`, {
        headers: getAuthHeader()
      });

    return request.then((response) => {
      dispatch(loadCashWithdrawalSuccess(response.data.data));
    });
  };
}

export const saveWithdrawalAmountRequest = (amount) => {
  return dispatch => {
    dispatch(saveWithdrawalAmount(amount));
    dispatch(push('/account/payment/withdrawal'));
    dispatch(setLoading(false))
  }
}

export const withdrawRequest = () => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const paymentReducer = getState().paymentReducer;
    const request = axios
                      .post(
                        `${process.env.REACT_APP_BALANCE_API_HOST}/cashouts/complete`,
                        {
                          amount: paymentReducer.amount,
                          delivery_date: paymentReducer.cashWithdrawal.delivery_date
                        },
                        {
                          headers: getAuthHeader()
                        }
                      );

    return request.then((response) => {
      dispatch(withdrawalSuccess());
      dispatch(push('/account/payment/withdrawal/complete'));
      dispatch(setLoading(false))
    });
  }
}