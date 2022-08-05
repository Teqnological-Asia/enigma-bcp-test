import React from 'react';
import { formatSide } from '../../../utils';

const OrderDetailInfo = ({ order }) => {
  if (!order) return null;

  return (
    <table className="c-table_d c-table_confirm">
      <tbody>
        <tr>
          <th>銘柄コード</th>
          <td>{order.stock.code}/{order.stock.name}</td>
        </tr>
        <tr>
          <th>区分</th>
          <td style={{ color: formatSide(order.side).color }}>
            {`現物${formatSide(order.side).side}`}
          </td>
        </tr>
        <tr>
          <th>取引数量</th>
          <td>{order.order_quantity || order.quantity}株</td>
        </tr>
        <tr>
          <th>執行条件</th>
          <td>相対</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderDetailInfo;
