import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsStock from '../../components/UsStock';
import { loadPhysicalsRequest, createOrderSuccess } from '../../actions/physical';
import { loadOrdersRequest } from '../../actions/order';

const mapStateToProps = (state) => {
  return {
    physicals: state.physicalReducer.physicals,
    orders: state.orderReducer.orders
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPhysicalsRequest,
    createOrderSuccess,
    loadOrdersRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStock);