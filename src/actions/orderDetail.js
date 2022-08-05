import axios from 'axios';
import {LOAD_ORDER_DETAIL_SUCCESS} from '../constants/orderDetail';
import {getAuthHeader} from './auth';
import {setLoading} from '../actions/loading';

export const loadOrderDetailSuccess = (order) => {
  return {
    type: LOAD_ORDER_DETAIL_SUCCESS,
    order
  }
}

export const loadOrderDetailRequest = (id) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .get(`${process.env.REACT_APP_ENIGMA_API_HOST}/orders/${id}`, {
        headers: getAuthHeader()
      });
    return request.then((response) => {
      const data = response.data;
      dispatch(loadOrderDetailSuccess(data));
      dispatch(setLoading(false))
    });
  };
}

export const loadOrderUsDetailRequest = (id) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .get(`${process.env.REACT_APP_ENIGMA_API_HOST}/usStock/orders/${id}`, {
        headers: getAuthHeader()
      });
    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadOrderDetailSuccess(data));
      dispatch(setLoading(false))
    });
  };
}
