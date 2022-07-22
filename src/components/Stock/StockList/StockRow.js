import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, formattedQuantities } from '../../../utils';

export const accountTypes = {
  'specific': '特定',
  'general': '一般',
  'exemptive': 'NISA'
};

const StockRow = ({ physical, isInternalMarket }) => {
  const renderSellButton = (
    <Link className="c-button c-button_small c-button_sell" to={`/account/${isInternalMarket ? "physical" : "us-stock"}/${physical.code}/order`}>売却</Link>
  );

  return (
    <tr>
      <td className="c-l c-code">{physical.code}</td>
      <td className="c-l c-title" data-name={physical.name} style={{ maxWidth: "10rem" }}>{physical.name}</td>
      <td className="c-l" data-name="区分">特定</td>
      <td data-name="数量">{formattedQuantities(physical.balanceQuiantity)}</td>
      <td data-name="取得単価">{formatCurrency(Number(physical.bookPrice).toFixed(0))}円</td>
      <td data-name="取得額">{formatCurrency(Number(physical.balanceQuiantity * physical.bookPrice).toFixed(0))}円</td>
      <td data-name="時価評価額">{formatCurrency(Number(physical.currentValue).toFixed(0))}円</td>
      <td data-name="評価損益">{formatCurrency(Number(physical.currentProfit).toFixed(0))}円</td>
      <td className="c-c">{renderSellButton}</td>
    </tr>
  );
}

export default StockRow;
