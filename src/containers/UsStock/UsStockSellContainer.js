import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsStockSell from '../../components/UsStock/Sell'
import { loadStockDetailRequest, getUsStockBalances, saveOrderFormRequest, getPriceInfo,saveOrderQuantityRequest, getUSSellInput } from '../../actions/usStock';

const mapStateToProps = (state) => {
  const { stockDetail, physicalDetail, orderFormValues, orderPrice,orderQuantity, sellInput} = state.usStockReducer;
  return {
    stockDetail,
    physicalDetail,
    orderFormValues,
    orderPrice,
    orderQuantity, 
    sellInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockDetailRequest,
    getUsStockBalances,
    saveOrderFormRequest,
    getPriceInfo,
    saveOrderQuantityRequest,
    getUSSellInput
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockSell);