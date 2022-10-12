import moment from 'moment';
import pathToRegexp from 'path-to-regexp';
import { invalidToken } from './actions/auth';
import { createError } from "./actions/error";
import { setLoading } from "./actions/loading";

export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validatePassword(password) {
  return /^[a-z0-9@#$%&?!_-]+$/i.test(password);
}

export function validateIntegerNumber(number) {
  return /^\d+$/.test(number);
}

export function validateNumber(number) {
  return !isNaN(number) && number >= 0;
}

export function formatCurrency(number, maxFraction = 4) {
  if (number != null) {
    const roundNumber = parseInt(parseFloat(number) * (10 ** maxFraction), 10) / (10 ** maxFraction)
    return roundNumber.toLocaleString('ja-JP', {
      maximumFractionDigits: maxFraction
    })

  }

  return '-';
}

export function formatDate(date) {
  if (date) return moment(date).format('YYYY/MM/D');
}

export function formatTime(date) {
  if (date) return moment(date).format('HH:mm');
}

export function formatDateTime(date) {
  if (date) return moment(date).format('YYYY/MM/D HH:mm');
}

export function matchPath(patterns, path) {
  let result = false;

  for (let pattern of patterns) {
    if (pathToRegexp(pattern).exec(path)) {
      result = true;
      break;
    }
  }

  return result;
}

export function getToken() {
  return sessionStorage.getItem('token');
}

export function isTokenExpired() {
  const token = sessionStorage.getItem('token').split(".");
  const jsonStr = atob(token[1]);
  const jsonObj = JSON.parse(jsonStr);
  const expTime = jsonObj.exp;
  const curTime = new Date().getTime() / 1000;

  return curTime > expTime;
}

export function removeElementFromArray(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

export function handleMinMaxCondition(value, min, max) {
  if (isNaN(value)) {
    return 0
  } else if (value < min) {
    return min
  } else if (value > max) {
    return max
  } else {
    return value
  }
}

export const sumMarginReducer = (accumulator, currentPosition) => accumulator + currentPosition.trade_quantity;

//remove array square brackets
export const removeArrSB = arr => {
  return { ...arr[0] }
}

export const filterOrderList = (stockList, typeOfMarkets) => {
  let result = [];
  if (!stockList) return result;
  for (let i = 0; i < typeOfMarkets.length; i++) {
    result = result.concat(stockList.filter(function (order) {
      return order.stock.type === typeOfMarkets[i];
    }))
  }
  return result;
}

export const filterStockList = (stockList, typeOfMarkets) => {
  let result = [];
  if (!stockList) return result;
  for (let i = 0; i < typeOfMarkets.length; i++) {
    result = result.concat(stockList.filter(function (stock) {
      return stock.type === typeOfMarkets[i];
    }))
  }
  return result;
}

export const formatSide = (side) => {
  if (side === "BUY") {
    return {
      side: "買",
      color: "#d64f26"
    }
  }
  return {
    side: "売",
    color: "#0c498e"
  }
}

export const formatStatus = (status, side) => {
  const statusTranslation = side === "BUY" ? {
    "WAITING": "入金待ち",
    "ORDERING": "注文中(口座振替前)",
    "TRANSFER_FAILED": "口座振替エラー",
    "FILLED": "約定済み",
    "CANCELLED": "取消済",
    "EXPIRED": "失効",
    "REJECTED": "リジェクト"
  } : {
    "WAITING": "注文受付",
    "ORDERING": "注文中",
    "TRANSFER_FAILED": "口座振替エラー",
    "FILLED": "約定済み",
    "CANCELLED": "取消済",
    "EXPIRED": "失効",
    "REJECTED": "リジェクト"
  }
  return statusTranslation[status];
}

export const formattedQuantities = (quantity) => {
  if (quantity == null) {
    return "-";
  }
  return quantity > 0
    ? `${formatCurrency(quantity, 0)}`
    : formatCurrency(quantity);
};

export const formattedTransactionPrice = price => (
  price && price[0] && price[0].estimatePrice ? formatCurrency(price[0].estimatePrice.ask) : '-'
)

export const formattedUpdateTime = time => (
  time && time[0] && time[0].exchangeRate ? moment(time[0].exchangeRate.updateAt).format('MM/DD hh:mm ') : '-'
)

export const formattedExchangeRate = rate => (
  rate && rate[0] && rate[0].exchangeRate ? formatCurrency(rate[0].exchangeRate.ask) : '-'
)

export const formattedCommission = rate => (
  rate && rate[0] && rate[0].commission ? formatCurrency(rate[0].commission.value) : '-'
)

export const showErrorMessage = (error, dispatch) => {
  let errorMessage = '';
  const errorCode = error.response.data.code;
  const errorMsg = error.response.data.message;

  dispatch(setLoading(false))
  if (isTokenExpired()) {
    dispatch(invalidToken());
  } else {
    errorMessage = errorCode ? `${errorMsg} [${error.response.data.code}]` : errorMsg;
    dispatch(createError(errorMessage));
  }
}

export const splitLine = (inputText) => {
  //return an array that elements are splited lines
  return (inputText + '').split("<br/>");
}

export const createArrayWithId = (inputText, currentCount) => {
  const splitLineResult = splitLine(inputText)
  //return an array that each element is an object contain id
  const result = splitLineResult.map((text, index) => {
    currentCount++;
    return {
      id: currentCount,
      text
    }
  })
  return result;
};
