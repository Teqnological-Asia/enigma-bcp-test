import React from 'react';
import {Link} from 'react-router-dom';
import {formatTime, formatDate, formatCurrency} from '../../utils';
import {statuses, formatTradeType} from './common';


const OrderUsRow = ({order, loadUs}) => {
  const renderTradeType = (order) => {
    const className = order.side === 'sell' ? 'u-sell' : 'u-buy';

    return (
      <span className={className}>{formatTradeType(order, true)}</span>
    );
  }

  const renderStatusLink = (order) => {
    return (
      <span className="c-l">{statuses[order.status]} </span>
    );
  }

  return (
    <tr>
      <td className="c-action">
        {order.isCancelable && (
          <Link className="icon-cancel-circled" to={`/account/order_us/${order.orderID}/cancel`}>
            <span>取り消す</span>
          </Link>
        )}
      </td>
      <td className="c-l" data-name="銘柄コード">{order.stockCode}</td>
      <td className="c-l" data-name={order.stockCode} style={{ maxWidth: "10rem" }}>{loadUs.name}</td>
      <td className="c-l" data-name="区分">{renderTradeType(order)}</td>
      <td className="c-l" data-name="取引時間">
        {formatDate(order.orderTime)} <br/>
        {formatTime(order.orderTime)}
      </td>
      <td data-name="取引数量">{formatCurrency(order.quantity, 0)}</td>
      <td className="c-l"
          data-name="（出来済）">({order.filledQuantity != null ? formatCurrency(order.filledQuantity, 0) : 0})</td>
      <td className="c-l" data-name="取引状況">{renderStatusLink(order)}</td>
      <td className="c-l c-l-center"  data-name="取引条件">相対</td>
      <td className="c-l" data-name="有効期限">当日中</td>
    </tr>
  );
}

export default OrderUsRow;
