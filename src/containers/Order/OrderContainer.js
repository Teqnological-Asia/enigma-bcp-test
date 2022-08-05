import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Order from '../../components/Order';
import { loadOrdersRequest, loadOrdersRequestUs, loadOrdersSuccess, changeOrderTab } from '../../actions/order';
import { loadUsStocksRequest } from "../../actions/usStock";

const mapStateToProps = (state) => {
  const { orders, tab } = state.orderReducer;
  const { usStocks } = state.usStockReducer
  return {
    orders,
    tab,
    usStocks
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrdersRequestUs: loadOrdersRequestUs,
    loadOrdersRequest: loadOrdersRequest,
    loadUsStocksRequest: loadUsStocksRequest,
    loadOrdersSuccess: loadOrdersSuccess,
    changeOrderTab: changeOrderTab
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
