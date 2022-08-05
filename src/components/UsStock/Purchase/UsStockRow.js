import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils";

const UsStockRow = ({ usStock, intraday }) => {
  const formatRadio = (price) => {
    if (price === null) return '-'

    if (price >= 0) {
      return <span className="u-minus">(+{formatCurrency(Number(price))}%)</span>
    } else {
      return <span className="u-sell">({formatCurrency(Number(price))}%)</span>;
    }
  }

  const formatPrice = (price) => {
    if (price === null) return '-'

    if (price >= 0) {
      return <span className="u-minus">+{formatCurrency(Number(price))}</span>
    } else {
      return <span className="u-sell">{formatCurrency(Number(price))}</span>;
    }
  }

  const renderSellButton = (
    <Link
      className="c-button c-button_small c-button_sell"
      to={`/account/us-stock/${usStock.code}/purchase`}
    >
      購入
    </Link>
  );

  return (
    <tr>
      <td className="c-l c-code">{usStock.code}</td>
      <td className="c-l c-title" data-name={usStock.stockCode}>
        {usStock.name}
      </td>
      <td className="c-l" data-name="上場市場">
        {usStock.market}
      </td>
      <td data-name="現在値">{formatCurrency(usStock.price) || "-"}円</td>
      <td data-name="前日比" className="us-stock-price">
        {formatPrice(usStock.price - usStock.previous_price)}
        {formatRadio((usStock.price - usStock.previous_price)/usStock.previous_price * 100)}
      </td>
      <td className="c-c">{renderSellButton}</td>
    </tr>
  );
};

export default UsStockRow;
