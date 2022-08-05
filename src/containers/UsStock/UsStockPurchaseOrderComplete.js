import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createOrderSuccess } from '../../actions/usStock';
import UsStockPurchaseOrderComplete from '../../components/UsStock/Purchase/Order/Complete/index';

const mapStateToProps = (state) => {
  const { stockDetail, orderFormValues, orderSendParams } = state.usStockReducer;

  return {
    stockDetail,
    orderFormValues,
    orderSendParams
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createOrderSuccess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockPurchaseOrderComplete);