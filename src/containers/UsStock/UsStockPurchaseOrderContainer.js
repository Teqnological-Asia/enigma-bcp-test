import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  getPriceInfo, 
  getTradeCapacities, 
  getUsStockBalances, 
  loadStockDetailRequest, 
  savePurchaseOrderFormRequest
  } from '../../actions/usStock';
import UsStockPurchaseOrder from '../../components/UsStock/Purchase/Order';

const mapStateToProps = (state) => {
  const { stockDetail, physicalDetail, orderFormValues, orderPrice, capacities} = state.usStockReducer;
  return {
    stockDetail,
    physicalDetail,
    orderFormValues,
    orderPrice,
    capacities
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockDetailRequest,
    getUsStockBalances,
    savePurchaseOrderFormRequest,
    getPriceInfo,
    getTradeCapacities
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockPurchaseOrder);