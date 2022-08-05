import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createOrderSuccess } from '../../actions/usStock';
import { changeOrderTab } from '../../actions/order';
import UsStockSellComplete from '../../components/UsStock/Sell/Complete/index';

const mapStateToProps = (state) => {
  const { stockDetail, orderFormValues, orderSendParams, orderQuantity } = state.usStockReducer;

  return {
    stockDetail,
    orderFormValues,
    orderSendParams,
    orderQuantity
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createOrderSuccess,
    changeOrderTab
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockSellComplete);