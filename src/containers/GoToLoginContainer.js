import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToLoginPage, goToBassAuthFontSignin } from '../actions/auth';
import GoToLogin from '../components/Authenticated/GoToLogin';

const mapStateToProps = (state) => {
  return {
    isStockOrderErr: state.authReducer.isStockOrderErr
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    goToLoginPage,
    goToBassAuthFontSignin
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GoToLogin);
