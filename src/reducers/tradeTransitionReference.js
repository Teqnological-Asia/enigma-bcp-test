import { LOAD_TRADE_TRANSITION_REFERENCE_SUCCESS } from '../constants/tradeTransitionReference';

const initialState = {
  tradeTransitionReference: [],
};

export const tradeTransitionReferenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_TRANSITION_REFERENCE_SUCCESS:
      return {
        tradeTransitionReference: action.tradeTransitionReference,
      };
    default:
      return state;
  }
}

export default tradeTransitionReferenceReducer;