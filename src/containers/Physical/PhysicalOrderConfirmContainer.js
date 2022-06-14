import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrderConfirm from '../../components/Physical/Order/Confirm';
import { createOrderRequest, saveOrderQuantityRequest } from '../../actions/physical';

const mapStateToProps = (state) => {
  const { stockDetail, orderFormValues,orderQuantity } = state.physicalReducer;

  return {
    stockDetail,
    orderFormValues,
    orderQuantity
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createOrderRequest,
    saveOrderQuantityRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrderConfirm);