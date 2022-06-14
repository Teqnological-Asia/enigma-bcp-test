import { connect } from 'react-redux';
import OrderForm from '../../components/Stock/StockSelling/OrderForm';

const mapStateToProps = (state) => {
  const {userInfo} = state.profileReducer;

  return {
    userInfo
  };
};

export default connect(mapStateToProps, null)(OrderForm);