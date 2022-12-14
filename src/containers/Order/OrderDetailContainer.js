import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderDetail from '../../components/Order/Detail';
import { loadOrderDetailRequest } from '../../actions/orderDetail';

const mapStateToProps = (state) => {
  const { order } = state.orderDetailReducer;
  return {
    order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrderDetailRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
