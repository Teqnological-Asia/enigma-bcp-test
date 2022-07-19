import axios from "axios";
import {
  push
} from 'react-router-redux';
import {
  CREATE_STOCK_SUCCESS,
  GET_INTRADAY_SUCCESS,
  GET_ORDER_PRICE_SUCCESS,
  GET_TRADE_CAPACITIES_SUCCESS,
  LOAD_PHYSICAL_DETAIL_SUCCESS,
  LOAD_STOCKS_SUCCESS,
  LOAD_US_STOCKS_SUCCESS,
  LOAD_US_STOCK_BALANCES_SUCCESS,
  LOAD_US_STOCK_DETAIL_SUCCESS,
  SAVE_ORDER_QUANTITY,
  SAVE_STOCK_FORM,
  SAVE_STOCK_SEND_PARAMS,
  GET_US_SELL_INPUT_SUCCESS
} from '../constants/usStock';
import { showErrorMessage } from '../utils';
import { getAuthHeader, getHeaderEnigma } from './auth';
import { setLoading } from "./loading";



export const loadUsStockBalancesSuccess = (usStockBalances) => {
  return {
    type: LOAD_US_STOCK_BALANCES_SUCCESS,
    usStockBalances,
  };
};

export const getIntradaySuccess = (intraday) => {
  return {
    type: GET_INTRADAY_SUCCESS,
    intraday
  }
}

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

export const getTradeCapacitiesSuccess = (capacities) => {
  return {
    type: GET_TRADE_CAPACITIES_SUCCESS,
    capacities
  }
}

export const saveOrderQuantity = (orderQuantity) => {
  return {
    type: SAVE_ORDER_QUANTITY,
    orderQuantity
  }
}

export const getUSSellInputSuccess = (sellInput) => {
  return {
    type: GET_US_SELL_INPUT_SUCCESS,
    sellInput
  }
}

export const saveOrderQuantityRequest = (quantity, id) => {
  return (dispatch) => {
    dispatch(setLoading(true))
    dispatch(saveOrderQuantity(quantity));
    dispatch(push(`/account/us-stock/${id}/order/confirm`));
    dispatch(setLoading(false))
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

export const loadUsStocksRequest = (type) => {
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
      const isUsStockPurchase = type === 'Purchase'
      if (isUsStockPurchase) {
        const code = response.data.data.items.map(item => item.code)
        dispatch(getIntradayInfo(code))
      }
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
    const stockRequest = axios
      .get(`${process.env.REACT_APP_ENIGMA_API_HOST}/usStocks/${stockCode}`, {
        headers: getAuthHeader()
      });
    const forexRequest = axios
      .get(`${process.env.REACT_APP_ENIGMA_API_HOST}/forex`, {
        headers: getAuthHeader()
      });
    Promise.all([stockRequest, forexRequest])
      .then(([stockRequest, forexRequest]) => {
        dispatch(loadStockDetailSuccess({ ...stockRequest.data.stock, ...forexRequest.data }));
        dispatch(setLoading(false))
      })
      .catch((error) => {
        showErrorMessage(error, dispatch)
        dispatch(loadStockDetailSuccess(null))
        dispatch(setLoading(false))
      })
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
    const wb4AssetID = getState().usStockReducer.physicalDetail.wb4AssetID;
    const orderNewParams = {
      wb4AssetID: wb4AssetID,
      settlementCurrencyType: "BASE",
      orderType: params.orderType.toLowerCase(),
      quantity: String(params.quantity),
    };

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
      const { wb4CheckDate, wb4CheckPrice, wb4OrderID } = data
      const orderParams = {
        wb4CheckDate,
        wb4CheckPrice,
        wb4OrderID
      }
      const otherDataForm = {
        price: getState().usStockReducer.orderPrice[0].estimatePrice.bid
      }
      dispatch(saveOrderForm({ ...params, ...otherDataForm }));
      dispatch(saveOrderSendParams({ ...orderNewParams, ...orderParams }));
      dispatch(push(`/account/us-stock/${id}/sell/confirm`));
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
    const quantity = getState().usStockReducer.orderQuantity;
    const params = {
      "code": id,
      // eslint-disable-next-line
      "quantity": parseInt(quantity)
    }
    const request = axios
      .post(
        `${process.env.REACT_APP_ENIGMA_API_HOST}/usStocks/sell`,
        params,
        {
          headers: getHeaderEnigma()
        }
      );
    return request.then((response) => {
      dispatch(push(`/account/us-stock/${id}/order/complete`));
      dispatch(setLoading(false))
    });
  }
}

export const getPriceInfo = (symbol) => {
  return dispatch => {
    dispatch(setLoading(true))
    const params = { symbol: symbol };
    const request = axios
      .get(`${process.env.REACT_APP_ORDER_API_HOST}/usStockOrders/priceInfo`, {
        params: params,
        headers: getAuthHeader()
      });
    return request.then((response) => {
      dispatch(getOrderPriceSuccess(response.data.data.items));
      dispatch(setLoading(false))
    });
  };
}


export const getIntradayInfo = (code) => {
  return dispatch => {
    dispatch(setLoading(true))
    const params = { code };
    const request = axios.get(`${process.env.REACT_APP_PRICE_API_HOST}/v2/intradays`, {
      params,
      headers: getAuthHeader()
    })
    return request.then((response) => {
      dispatch(getIntradaySuccess(response.data.data))
      dispatch(setLoading(false))
    })
  }
}

export const getTradeCapacities = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios.get(`${process.env.REACT_APP_BALANCE_API_HOST}/trade_capacities`, {
      headers: getAuthHeader()
    })
    return request.then((response) => {
      dispatch(getTradeCapacitiesSuccess(response.data.data))
    })
  }
}

export const savePurchaseOrderFormRequest = (id, params) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const orderNewParams = {
      settlementCurrencyType: "BASE",
      orderType: "market",
      quantity: params.toString(),
      symbol: id,
      accountType: "specific",
    };

    const request = axios
      .post(
        `${process.env.REACT_APP_ORDER_API_HOST}​/usStockOrders/buy/new`,
        orderNewParams,
        {
          headers: getAuthHeader(),
        }
      );

    return request.then((response) => {
      const data = response.data.data;
      const { wb4CheckDate, wb4CheckPrice, wb4OrderID } = data
      const otherDataForm = {
        price: getState().usStockReducer.orderPrice[0].estimatePrice.bid
      }
      const orderParams = {
        wb4CheckDate,
        wb4CheckPrice,
        wb4OrderID
      }
      dispatch(saveOrderForm({ ...params, ...otherDataForm }));
      dispatch(saveOrderSendParams({ ...orderNewParams, ...orderParams }));
      dispatch(push(`/account/us-stock/${id}/purchase/confirm`));
      dispatch(setLoading(false))
    });
  }
}

export const createPurchaseOrderConfirm = (id) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const params = getState().usStockReducer.orderSendParams;
    const request = axios
      .post(
        `${process.env.REACT_APP_ORDER_API_HOST}/usStockOrders/buy/new/send`,
        params,
        {
          headers: getAuthHeader(),
        }
      );

    return request.then((response) => {
      dispatch(push(`/account/us-stock/${id}/purchase/complete`));
      dispatch(setLoading(false))
    });
  }
}

export const getUSSellInput = (stockCode) => {
  return (dispatch,getState) => {
    dispatch(setLoading(true))
    const params = {
      "code": stockCode,
      "quantity": 0 //default value
    }
    const request = axios.post(`${process.env.REACT_APP_ENIGMA_API_HOST}/usStocks/sellInput`,
      params,
      {
        headers: getAuthHeader()
      })
    return request.then((response) => {
      dispatch(getUSSellInputSuccess(response.data))
      dispatch(setLoading(false))
    })
  }
}