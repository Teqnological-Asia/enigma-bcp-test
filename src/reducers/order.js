import { LOAD_ORDERS_SUCCESS, LOAD_ORDERS_US_SUCCESS,CHANGE_ORDER_TAB } from '../constants/order';

const initialState = {
  orders: [],
  tab:1,
  request: null
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders
      };
    case LOAD_ORDERS_US_SUCCESS:
      return {
        ...state,
        request: action.request
      };
      case CHANGE_ORDER_TAB:
      return {
        ...state,
        tab: action.tab
      };
    default:
      return state;
  }
}

export default orderReducer;
