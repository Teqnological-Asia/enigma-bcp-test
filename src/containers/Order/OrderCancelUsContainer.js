import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadOrderDetailRequest, loadOrderUsDetailRequest} from '../../actions/orderDetail';
import {cancelOrderRequest, orderCancelUs, orderCancelUsRequest} from '../../actions/order';
import {loadUsStocksRequest} from '../../actions/usStock';
import OrderUsCancel from "../../components/Order/CancelUs";

const mapStateToProps = (state) => {
  return {
    order: state.orderDetailReducer.order,
    request: state.orderReducer.request,
    usStocks: state.usStockReducer.usStocks
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrderDetailRequest,
    loadOrderUsDetailRequest,
    cancelOrderRequest,
    orderCancelUsRequest,
    orderCancelUs,
    loadUsStocksRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderUsCancel);
