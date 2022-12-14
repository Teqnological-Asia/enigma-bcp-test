import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, EXPIRED_TOKEN, SET_ANTI_SOCIAL, STOCK_ORDER_ERROR } from '../constants/auth';

const initialState = {
  error: null,
  isInvalidToken: false,
  isAntiSocial: false,
  isStockOrderErr: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isInvalidToken: false,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isInvalidToken: false,
        error: action.error
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isInvalidToken: false,
        error: null
      }
    case EXPIRED_TOKEN:
      return {
        ...state,
        isInvalidToken: true,
        error: null
      }
    case SET_ANTI_SOCIAL:
      return {
        ...state,
        isAntiSocial: action.isAntiSocial,
      }
    case STOCK_ORDER_ERROR:
      return {
        ...state,
        isStockOrderErr: action.isStockOrderErr,
      }
    default:
      return state;
  }
}

export default authReducer;