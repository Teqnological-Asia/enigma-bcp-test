import { formatCurrency, formatDate } from '../../utils';

export const tradeTypes = {
  'equity': '現物',
  'margin_open': '信用新規',
  'margin_close': '信用返済',
  'margin_swap': '信用現',
  'general_margin_open':'信用新規',
  'general_margin_close':'信用返済',
  'general_margin_swap':'信用現',
};

export const tradeTypeCancelPath = {
  'equity': 'orders',
  'margin_open': 'margin_orders/open',
  'margin_close': 'margin_orders/close',
  'margin_swap': 'margin_orders/swap',
  'general_margin_open': 'margin_orders/open',
  'general_margin_close':'margin_orders/close',
  'general_margin_swap':'margin_orders/swap'
}

export const suffixByTradeType = (side, trade_type = '') => {
  if ((/margin_swap/).test(trade_type)) {
    return side === "sell" ? '引' : '渡'
  } else {
    return side === "sell" ? '売' : '買'
  }
}
export const suffixForMarginType = (trade_type) => {
  if ((/general_margin/).test(trade_type)) {
    return "(一般)";
  } else if ((/margin_open|margin_close|margin_swap/).test(trade_type)) {
    return "(制度)";
  } else return ""
}
export const statuses = {
  'new': '発注待ち',
  'acknowledged': '未約定',
  'partial_filled': '一部約定',
  'filled': '全部約定',
  'cancelled': '取消完了',
  'rejected': '受付エラー',
  'expired': '失効'
};

export const sides = {
  'buy': '現物買い',
  'sell': '現物売り'
};

export const types = {
  'market': '成行',
  'limit': '指値'
};

export const reportTypes = ['fill', 'partial_fill'];

export const formatTradeType = (order, usStock = false) => {
  const tradeType = tradeTypes[usStock ? 'equity' : order.trade_type];
  const suffix = suffixByTradeType(order.side, order.trade_type) + suffixForMarginType(order.trade_type)
  return `${tradeType}${suffix}`;
}

export const formatPrice = (order) => {
  return (order.order_type === "limit") ? `指値${formatCurrency(order.order_price)}円` : "成行";
}

export const formatExpirationDate = (order) => {
  return (order.expiration_type === 'day') ? "当日中" : formatDate(order.expiration_date);
}
