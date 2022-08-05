import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsStockPurchaseConfirm from '../../components/UsStock/Purchase/Order/Confirm/index'
import { createPurchaseOrderConfirm } from '../../actions/usStock';

const mapStateToProps = (state) => {
  const { stockDetail, orderSendParams, orderFormValues } = state.usStockReducer;

  return {
    stockDetail,
    orderSendParams,
    orderFormValues
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createPurchaseOrderConfirm
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockPurchaseConfirm);