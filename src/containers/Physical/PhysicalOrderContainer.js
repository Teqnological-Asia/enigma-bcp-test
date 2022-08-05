import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrder from '../../components/Physical/Order';
import { loadStockDetailRequest, loadPhysicalDetailRequest, saveOrderFormRequest, saveOrderQuantityRequest } from '../../actions/physical';
import {loadUserInfoRequest} from '../../actions/profile';

const mapStateToProps = (state) => {
  const { stockDetail, physicalDetail, orderFormValues, orderQuantity } = state.physicalReducer;
  const {userInfo} = state.profileReducer;
  
  return {
    stockDetail,
    physicalDetail,
    orderFormValues,
    orderQuantity,
    userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockDetailRequest,
    loadPhysicalDetailRequest,
    saveOrderFormRequest,
    saveOrderQuantityRequest,
    loadUserInfoRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrder);