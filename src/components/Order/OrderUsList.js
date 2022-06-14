import React from "react";
import OrderUsRow from "./OrderUsRow";
import EmptyTableRow from "../Authenticated/EmptyTableRow";
import { filterOrderList } from '../../utils';

const OrderUsList = ({orders,usStocks}) => {
  const filteredOrderList=filterOrderList(orders,["US_STOCK"]);
  const renderOrders = (orders) => {
    if (orders && usStocks && orders.length > 0) {
      return orders.map((order, key) => {
        const loadUs = usStocks.find((item) => item.code === order.stockCode)
        return (
          <OrderUsRow {...{order, key, loadUs}} />
        )
      })
        ;
    } else {
      return <EmptyTableRow message="明細はありません。"/>;
    }
  };

  return (
    <table className="c-table_list">
      <thead>
      <tr>
        <th className="c-action"></th>
        <th className="c-l">銘柄コード</th>
        <th className="c-l">銘柄</th>
        <th className="c-l">区分</th>
        <th className="c-l">発注時間</th>
        <th>取引数量</th>
        <th className="c-l">（出来済）</th>
        <th className="c-l">取引状況</th>
        <th className="c-l">執行条件・単価</th>
        <th className="c-l">有効期限</th>
      </tr>
      </thead>
      <tbody>{renderOrders(filteredOrderList)}</tbody>
    </table>
  );
};

export default OrderUsList;
