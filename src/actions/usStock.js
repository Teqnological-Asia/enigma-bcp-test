import { setLoading } from "./loading";
import axios from "axios";
import { getAuthHeader } from './auth';
import {
  push
} from 'react-router-redux';
import {
  LOAD_STOCKS_SUCCESS,
  LOAD_US_STOCK_DETAIL_SUCCESS,
  LOAD_PHYSICAL_DETAIL_SUCCESS,
  SAVE_STOCK_FORM,
  CREATE_STOCK_SUCCESS,
  SAVE_STOCK_SEND_PARAMS,
  GET_ORDER_PRICE_SUCCESS,
  LOAD_US_STOCK_BALANCES_SUCCESS,
  LOAD_US_STOCKS_SUCCESS
} from '../constants/usStock';


export const loadUsStockBalancesSuccess = (usStockBalances) => {
  return {
    type: LOAD_US_STOCK_BALANCES_SUCCESS,
    usStockBalances,
  };
};

export const loadUsStocksSuccess = (usStocks) => {
  return {
    type: LOAD_US_STOCKS_SUCCESS,
    usStocks,
  };
};

export const loadPhysicalsSuccess = (physicals) => {
  return {
    type: LOAD_STOCKS_SUCCESS,
    physicals
  }
}

export const loadPhysicalDetailSuccess = (physical) => {
  return {
    type: LOAD_PHYSICAL_DETAIL_SUCCESS,
    physicalDetail: physical
  }
}

export const loadStockDetailSuccess = (stock) => {
  return {
    type: LOAD_US_STOCK_DETAIL_SUCCESS,
    stockDetail: stock
  }
}

export const saveOrderForm = (orderFormValues) => {
  return {
    type: SAVE_STOCK_FORM,
    orderFormValues
  }
}

export const saveOrderSendParams = (orderSendParams) => {
  return {
    type: SAVE_STOCK_SEND_PARAMS,
    orderSendParams
  }
}

export const createOrderSuccess = () => {
  return {
    type: CREATE_STOCK_SUCCESS
  }
}

export const getOrderPriceSuccess = (price) => {
  return {
    type: GET_ORDER_PRICE_SUCCESS,
    price
  }
}



export const loadUsStockBalancesRequest = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const request = axios.get(
      `${process.env.REACT_APP_BALANCE_API_HOST}/usStock/balances`,
      {
        headers: getAuthHeader(),
      }
    );

    return request.then((response) => {
      dispatch(loadUsStockBalancesSuccess(response.data.data));
      dispatch(setLoading(false));
    });
  };
};

export const loadUsStocksRequest = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const request = axios.get(
        `${process.env.REACT_APP_STREAM_API_HOST}/v1/stocks/us_stocks`,
        {
          headers: getAuthHeader(),
          params: {
            page: 1,
          }
        }
    );

    return request.then((response) => {
      dispatch(loadUsStocksSuccess(response.data.data));
      dispatch(setLoading(false));
    });
  };
};



export const loadPhysicalsRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/equity_balances`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadPhysicalsSuccess(response.data.data.equity_balances));
      dispatch(setLoading(false))
    });
  };
}

export const getUsStockBalances = (stockCode) => {
  return dispatch => {
    dispatch(setLoading(true))
    const params = {code: stockCode};
    const request = axios
                      .get(`${process.env.REACT_APP_US_STOCK_BALANCES}/usStock/balances`, {
                        params: params,
                        headers: getAuthHeader()
                      });
    return request.then((response) => {
      dispatch(loadPhysicalDetailSuccess(response.data.data.items[0]));
      dispatch(setLoading(false))
    });
  };
}

export const loadStockDetailRequest = (stockCode) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_STREAM_API_HOST}/v1/stocks?code=${stockCode}`, {
                        headers: getAuthHeader()
                      });
    return request.then((response) => {
      dispatch(loadStockDetailSuccess(response.data.data));
      dispatch(setLoading(false))
    });
  };
}

export const saveOrderFormRequest = (id, params) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const physicalDetail = getState().physicalReducer.physicalDetail;
    const orderNewParams = {
      symbol: physicalDetail.stock_code,
      exchange: 'T',
      side: 'Sell',
      account_type: accountTypes[physicalDetail.account_type],
      order_type: params.orderType,
      execution_type: 'None',
      quantity: String(params.quantity),
      expiration_type: 'DAY',
      order_condition_type: 'None'
    };

    if (orderNewParams['order_type'] === 'Limit') {
      orderNewParams['price'] = String(params.price);
    }

    const request = axios
                      .post(
                        `${process.env.REACT_APP_ORDER_API_HOST}/usStockOrders/sell/new`,
                        orderNewParams,
                        {
                          headers: getAuthHeader(),
                        }
                      );

    return request.then((response) => {
      const data = response.data.data;
      const orderNewResponse = {
        system_order_id: data.system_order_id,
        wb5_confirmed_date: data.wb5_confirmed_date,
        wb5_confirmed_price: data.wb5_confirmed_price
      };

      dispatch(saveOrderForm(params));
      dispatch(saveOrderSendParams({...orderNewParams, ...orderNewResponse}));
      dispatch(push(`/account/physical/${id}/order/confirm`));
      dispatch(setLoading(false))
    });
  }
}

export const accountTypes = {
  'general': '0',
  'specific': '1',
  'exemptive': '6'
};

export const createOrderRequest = (id) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const params = getState().physicalReducer.orderSendParams;
    const request = axios
                      .post(
                        `${process.env.REACT_APP_ORDER_API_HOST}/orders/send`,
                        params,
                        {
                          headers: getAuthHeader(),
                        }
                      );

    return request.then((response) => {
      dispatch(push(`/account/physical/${id}/order/complete`));
      dispatch(setLoading(false))
    });
  }
}

export const getPriceInfo = (symbol) => {
  return dispatch => {
    dispatch(setLoading(true))
    const params = {symbol: symbol};
    const request = axios
                      .get(`${process.env.REACT_APP_US_STOCK_ORDER}/usStockOrders/priceInfo`, {
                        params: params,
                        headers: getAuthHeader()
                      });
    return request.then((response) => {
      dispatch(getOrderPriceSuccess(response.data.data.items));
      dispatch(setLoading(false))
    });
  };
}
