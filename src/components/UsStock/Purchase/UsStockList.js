import React from "react";
import EmptyTableRow from "../../Authenticated/EmptyTableRow";
import UsStockRow from "./UsStockRow";

const UsStockList = ({usStocksIntraday, usStocks }) => {
  const renderUsStocks = (usStocks) => {
    const mappedStock = usStocks && usStocks.map(item => {
      const temp = usStocksIntraday.find(stock => stock.code === item.code)
      if (temp) {
        item.price = temp.price
        item.previous_price = temp.previous_price
      }
      return item
    })
    if (mappedStock) {
      return usStocks.map((stock, key) => {
        return (
        <UsStockRow key={`stock-${key}`} usStock={stock} intraday={usStocksIntraday}/>
      )});
    } else {
      return <EmptyTableRow message="明細はありません。" />;
    }
  };
  return (
    <div className="u-mt20p">
      <table className="c-table_list">
        <thead>
          <tr>
            <th className="c-l">銘柄コード</th>
            <th className="c-l">銘柄</th>
            <th className="c-l">上場市場</th>
            <th>現在値</th>
            <th style={{textAlign: "center"}}>前日比</th>
            <th className="c-c">発注</th>
          </tr>
        </thead>
        <tbody>{renderUsStocks(usStocks)}</tbody>
      </table>
    </div>
  );
};

export default UsStockList;
