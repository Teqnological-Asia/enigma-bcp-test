import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeTransitionReference from '../../components/Trade/TransitionReference'
import {loadTradeTransitionReferenceRequest} from '../../actions/tradeTransitionReference'

const mapStateToProps = (state) => {
  const {tradeTransitionReference} = state.tradeTransitionReferenceReducer
  return{
    tradeTransitionReference
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeTransitionReferenceRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeTransitionReference);