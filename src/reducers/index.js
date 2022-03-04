import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import tradeHistoryReducer from './tradeHistory';
import profileReducer from './profile';
import privateNotificationReducer from './privateNotification';
import publicNotificationReducer from './publicNotification';
import errorReducer from './error';
import modalReducer from './modal';
import notificationReducer from './notificationDetail';
import balanceReducer from './balance';
import orderReducer from './order';
import orderDetailReducer from './orderDetail';
import usStockReducer from './usStock';
import physicalReducer from './physical';
import paymentReducer from './payment';
import paymentHistoryReducer from './paymentHistory';
import paymentCancelReducer from './paymentCancel';
import deliveryReducer from './delivery';
import tradeTaxReducer from './tradeTax';
import reportReducer from './report';
import loadingReducer from './loading';
import tradeLendingBalanceReducer from './tradeLendingBalance'
import tradeTransitionReferenceReducer from './tradeTransitionReference'
export default combineReducers({
  routing: routerReducer,
  authReducer,
  tradeHistoryReducer,
  profileReducer,
  privateNotificationReducer,
  publicNotificationReducer,
  errorReducer,
  modalReducer,
  notificationReducer,
  balanceReducer,
  orderReducer,
  orderDetailReducer,
  physicalReducer,
  usStockReducer,
  paymentReducer,
  paymentHistoryReducer,
  paymentCancelReducer,
  deliveryReducer,
  tradeTaxReducer,
  reportReducer,
  loadingReducer,
  tradeLendingBalanceReducer,
  tradeTransitionReferenceReducer,
});
