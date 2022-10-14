import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, formatDate, formatSide, formatStatus, formatTime } from '../../utils';

const OrderRow = ({ order }) => {

  const renderStatusLink = (order) => {
    return (
      <Link className="c-u" to={`/account/order/${order.id}/detail`}>{formatStatus(order.status, order.side)}</Link>
    );
  }

  return (
    <tr>
      <td className="c-action">
        {order.status === "WAITING" && (
          <Link className="icon-cancel-circled" to={`/account/order/${order.id}/cancel`}>
            <span>取り消す</span>
          </Link>
        )}
      </td>
      <td className="c-l" data-name="銘柄コード">{order.stock.code}</td>
      <td className="c-l" data-name="銘柄" >{order.stock.name}</td>
      <td className="c-l" data-name="区分" style={{ color: formatSide(order.side).color }}>{`現物${formatSide(order.side).side}`}</td>
      <td className="c-l" data-name="取引時間">
        {formatDate(order.orderTime)} <br />
        {formatTime(order.orderTime)}
      </td>
      <td data-name="取引数量">{formatCurrency(order.quantity, 0)}</td>
      <td className="c-l" data-name="（出来済）">({formatCurrency(order.filledQuantity, 0) || 0})</td>
      <td className="c-l" data-name="取引状況">{renderStatusLink(order)}</td>
      <td className="c-l" data-name="執行条件">相対</td>
    </tr>
  );
        }

export default OrderRow;
