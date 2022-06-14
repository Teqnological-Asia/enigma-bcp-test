import {
  LOAD_STOCKS_SUCCESS,
  LOAD_US_STOCK_DETAIL_SUCCESS,
  LOAD_PHYSICAL_DETAIL_SUCCESS,
  SAVE_STOCK_FORM,
  CREATE_STOCK_SUCCESS,
  SAVE_STOCK_SEND_PARAMS,
  GET_ORDER_PRICE_SUCCESS,
  LOAD_US_STOCK_BALANCES_SUCCESS,
  LOAD_US_STOCKS_SUCCESS,
  GET_INTRADAY_SUCCESS,
  GET_TRADE_CAPACITIES_SUCCESS,
  SAVE_ORDER_QUANTITY
} from "../constants/usStock";

const initialState = {
  physicals: [],
  physicalDetail: null,
  stockDetail: null,
  orderFormValues: null,
  orderSendParams: null,
  orderPrice: [],
  usStockBalances: [],
  usStocks: [],
  intraday: [],
  capacities: null,
};

export const usStockReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STOCKS_SUCCESS:
      return {
        ...state,
        physicals: action.physicals,
      };
    case LOAD_US_STOCK_DETAIL_SUCCESS:
      return {
        ...state,
        stockDetail: action.stockDetail,
      };
    case LOAD_PHYSICAL_DETAIL_SUCCESS:
      return {
        ...state,
        physicalDetail: action.physicalDetail,
      };
    case SAVE_STOCK_FORM:
      return {
        ...state,
        orderFormValues: action.orderFormValues,
      };
    case SAVE_STOCK_SEND_PARAMS:
      return {
        ...state,
        orderSendParams: action.orderSendParams,
      };
    case CREATE_STOCK_SUCCESS:
      return initialState;
    case GET_ORDER_PRICE_SUCCESS:
      return {
        ...state,
        orderPrice: action.price,
      };
    case LOAD_US_STOCK_BALANCES_SUCCESS:
      return {
        ...state,
        usStockBalances: action.usStockBalances,
      };
    case LOAD_US_STOCKS_SUCCESS:
      return {
        ...state,
        usStocks: action.usStocks,
      };
    case GET_INTRADAY_SUCCESS:
      return {
        ...state,
        intraday: action.intraday,
      };
    case GET_TRADE_CAPACITIES_SUCCESS:
      return {
        ...state,
        capacities: action.capacities,
      };
    case SAVE_ORDER_QUANTITY:
      return {
        ...state,
        orderQuantity: action.orderQuantity
      };
    default:
      return state;
  }
};

export default usStockReducer;
