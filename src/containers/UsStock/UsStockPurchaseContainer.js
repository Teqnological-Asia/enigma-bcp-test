import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsStockPurchase from '../../components/UsStock/Purchase'
import { loadUsStocksRequest, getIntradayInfo } from '../../actions/usStock';


const mapStateToProps = (state) => {
  const { usStocks, intraday } = state.usStockReducer;
  return {
    usStocks,
    intraday
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadUsStocksRequest,
    getIntradayInfo
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsStockPurchase);
