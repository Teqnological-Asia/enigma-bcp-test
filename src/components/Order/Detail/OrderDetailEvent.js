import React from 'react';
import { formatCurrency, formatDate, formatTime } from '../../../utils';

const OrderDetailEvent = ({ order }) => {
  if (!order) return null;
  const { contractTime, filledQuantity, filledPrice, filledAmount } = order;
  return (
    <table className="c-table_d">
      <thead>
        <tr>
          <th>約定時間</th>
          <td>数量</td>
          <td>約定値段</td>
          <td>約定金額</td>
        </tr>
      </thead>
      <div style={{ height: 2 }} />
      {(contractTime && filledQuantity && filledPrice && filledAmount) &&
        <thead>
          <tr>
            <th>
              {formatDate(order.contractTime)}
              <br className="only_sp" /> {formatTime(order.contractTime)}
            </th>
            <td>{formatCurrency(order.filledQuantity, 0)}</td>
            <td>{formatCurrency(parseFloat(order.filledPrice), 4)}</td>
            <td>{order.filledAmount}</td>
          </tr>
        </thead>
      }
    </table>
  );
}

export default OrderDetailEvent;