import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsStockSellConfirm from '../../components/UsStock/Sell/Confirm/index'
import { createOrderRequest } from '../../actions/usStock';

const mapStateToProps = (state) => {
  const { stockDetail, orderSendParams, orderFormValues, orderQuantity } = state.usStockReducer;

  return {
    stockDetail,
    orderSendParams,
    orderFormValues,
    orderQuantity
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createOrderRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockSellConfirm);