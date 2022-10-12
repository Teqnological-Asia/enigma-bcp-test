import axios from 'axios';
import { push } from 'react-router-redux';
import { setLoading } from '../actions/loading';
import { LOAD_ORDERS_SUCCESS, LOAD_ORDERS_US_SUCCESS, CHANGE_ORDER_TAB } from '../constants/order';
import { getAuthHeader, getHeaderEnigma } from './auth';

export const loadOrdersSuccess = (orders) => {
  return {
    type: LOAD_ORDERS_SUCCESS,
    orders,
  }
}

export const orderOrderUsSuccess = (request) => {
  return {
    type: LOAD_ORDERS_US_SUCCESS,
    request,
  }
}

export const changeOrderTab = (tab) => {
  return {
    type: CHANGE_ORDER_TAB,
    tab,
  }
}

export const loadOrdersRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .get(`${process.env.REACT_APP_ENIGMA_API_HOST}/orders`, {
        headers: getAuthHeader()
      });

    return request.then((response) => {
      const data = response.data;
      dispatch(loadOrdersSuccess(data.orders));
      dispatch(setLoading(false))
    });
  };
}

export const loadOrdersRequestUs = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/usStock/orders`, {
        params: params,
        headers: getAuthHeader()
      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadOrdersSuccess(data.items));
      dispatch(setLoading(false))
    });
  };
}

export const orderCancelUs = (id) => {
  const baseUrl = `${process.env.REACT_APP_ORDER_API_HOST}/usStockOrders`
  const headers = {
    headers: getAuthHeader()
  }
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios.post(
      `${baseUrl}/${id}/cancel`,
      {},
      headers
    );
    return request.then((response) => {
      const data = response.data.data
      dispatch(orderOrderUsSuccess(data));
      dispatch(setLoading(false))
    })
  };
}

export const orderCancelUsRequest = (id, request) => {
  const baseUrl = `${process.env.REACT_APP_ORDER_API_HOST}/usStockOrders`
  const headers = {
    headers: getAuthHeader()
  }
  return dispatch => {
    dispatch(setLoading(true))
    const body = {
      wb4CheckDate: request.wb4CheckDate,
      wb4OrderID: request.wb4OrderID
    }
    const cancelSendRequest = axios.post(
      `${baseUrl}/${id}/cancel/send`,
      body,
      headers
    );

    return cancelSendRequest.then((response) => {
      dispatch(push(`/account/order_us/${id}/cancel/complete`));
      dispatch(setLoading(false))
    });
  }
}

export const cancelOrderRequest = (id, side) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const params = {
      "code": id
    }
    const url = side === "BUY" ? `${process.env.REACT_APP_ENIGMA_API_HOST}/stocks/buy/cancel` : `${process.env.REACT_APP_ENIGMA_API_HOST}/stocks/sell/cancel`
    const request = axios
      .post(
        url,
        params,
        {
          headers: getHeaderEnigma(),
        }
      );

    return request.then((response) => {
      dispatch(setLoading(false))
      dispatch(push("/account/order"));
    });
  }
}

export const cancelUSOrderRequest = (id, side) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const params = {
      "code": id
    }
    const url = side === "BUY" ? `${process.env.REACT_APP_ENIGMA_API_HOST}/usStocks/buy/cancel` : `${process.env.REACT_APP_ENIGMA_API_HOST}/usStocks/sell/cancel`
    const request = axios
      .post(
        url,
        params,
        {
          headers: getHeaderEnigma()
        }
      );

    return request.then((response) => {
      dispatch(setLoading(false))
      dispatch(push("/account/order"));
    });
  }
}
