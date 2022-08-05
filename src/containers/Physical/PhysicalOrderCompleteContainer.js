import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeOrderTab } from '../../actions/order';
import { createOrderSuccess } from '../../actions/physical';
import PhysicalOrderComplete from '../../components/Physical/Order/Complete';

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
    createOrderSuccess,
    changeOrderTab
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrderComplete);