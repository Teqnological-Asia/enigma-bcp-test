import { LOAD_ORDER_DETAIL_SUCCESS } from '../constants/orderDetail';

const initialState = {
  order: null,
};

export const orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        order: action.order,
      };
    default:
      return state;
  }
}

export default orderDetailReducer;
