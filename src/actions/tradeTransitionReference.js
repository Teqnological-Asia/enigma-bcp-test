import axios from "axios";
import moment from "moment";
import {LOAD_TRADE_TRANSITION_REFERENCE_SUCCESS} from "../constants/tradeTransitionReference";
import {getAuthHeader} from "./auth";
import {setLoading} from "../actions/loading";

export const loadTradeTransitionReferenceSuccess = (
  tradeTransitionReference
) => {
  return {
    type: LOAD_TRADE_TRANSITION_REFERENCE_SUCCESS,
    tradeTransitionReference,
  };
};

export const loadTradeTransitionReferenceRequest = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const url = `${process.env.REACT_APP_BALANCE_API_HOST}/tradingPowerTransitionReference`;
    const request = axios.get(url, {
      headers: getAuthHeader(),
    });

    return request.then((response) => {
      const data = response.data.data.transitions;
      const sortedTransitionsByDate = data.sort(
        (a, b) =>
          new moment(a.date).format("YYYYMMDD") -
          new moment(b.date).format("YYYYMMDD")
      );
      const length = sortedTransitionsByDate.length;
      const lastedTransitions = sortedTransitionsByDate.slice(length - 6, length)
      dispatch(loadTradeTransitionReferenceSuccess(lastedTransitions));
      dispatch(setLoading(false));
    });
  };
};
