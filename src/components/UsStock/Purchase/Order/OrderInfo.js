import React from 'react';
import { formatCurrency } from '../../../../utils';

const OrderInfo = ({stockDetail, orderSendParams, orderFormValues}) => {
  return (
    <div className="u-mt20p">
      <div className="c-table-responsive">
        <div className="c-table_inputs">
          <table>
            <tbody>
              <tr>
                <th>銘柄コード</th>
                <td>{stockDetail.code}/{stockDetail.name}</td>
              </tr>
              <tr>
                <th>取引参考価格</th>
                <td>{formatCurrency(orderFormValues.price)}円</td>
              </tr>
              <tr>
                <th>取引</th>
                <td>現物売却</td>
              </tr>
              <tr>
                <th>取引株数</th>
                <td>{orderSendParams.quantity}株</td>
              </tr>
              <tr>
                <th>執行条件</th>
                <td>相対</td>
              </tr>
              <tr>
                <th>取引期限</th>
                <td>当日限り</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
