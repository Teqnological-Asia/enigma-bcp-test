import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Balance from '../../components/Balance';
import { loadBalanceRequest } from '../../actions/balance';
import { createError } from '../../actions/error';

const mapStateToProps = (state) => {
  return {
    tradeCapacities: state.balanceReducer.tradeCapacities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadBalanceRequest,
    createError
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
