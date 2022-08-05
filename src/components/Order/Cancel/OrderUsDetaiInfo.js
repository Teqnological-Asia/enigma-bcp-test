import React from 'react';
import {formatTradeType} from '../common';

const OrderDetailInfo = ({order, usStocks}) => {

  if (!order || !usStocks) {
    return null
  }
  const loadName = usStocks.find((loadName) => loadName.code === order.stockCode
  )
  let stockName = ''

  if (loadName != null) {
    stockName = loadName.name
  }

  return (
    <table className="c-table_d c-table_confirm">
      <tbody>
      <tr>
        <th>銘柄コード</th>
        <td>{order.stockCode}/{stockName}</td>
      </tr>
      {/* <tr>
          <th>市場</th>
          <td>当社最良執行市場</td>
        </tr> */}
      <tr>
        <th>取引</th>
        <td>{formatTradeType(order, true)}</td>
      </tr>
      <tr>
        <th>取引株数</th>
        <td>{order.quantity}株</td>
      </tr>
      <tr>
        <th>執行条件・単価</th>
        <td>相対</td>
      </tr>
      <tr>
        <th>取引期限</th>
        <td>当日中</td>
      </tr>
      </tbody>
    </table>
  )
}

export default OrderDetailInfo;
