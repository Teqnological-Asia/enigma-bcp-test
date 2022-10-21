import React, { Component } from 'react';
import { formatCurrency, formattedQuantities } from '../../../utils';
import store from '../../../store';
import { push } from "react-router-redux";
import CancelStockOrderModal from '../Modal/CancelStockOrder'

export const accountTypes = {
  'specific': '特定',
  'general': '一般',
  'exemptive': 'NISA'
};

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tab: 1
    };
  }

  render() {
    const {orders, physical, isInternalMarket } = this.props
    const handleClickSellButton = (isInternalMarket, orders) => {
      const findHasOrder = orders.find(order => physical.code === order.stock.code && order.side === "SELL" && (order.status === "WAITING" || order.status === "ORDERING"));
  
      if(!findHasOrder){
        store.dispatch(push(`/account/${isInternalMarket ? "physical" : "us-stock"}/${physical.code}/order`));
      }
      else {
        this.setState({isOpen: true, tab : isInternalMarket ? 1 : 2});
      }
    };
    
    const renderSellButton = <button onClick={ () => handleClickSellButton( isInternalMarket, orders ) } className="c-button c-button_small c-button_sell">売却</button>
    return (
      <tr>
        <td className="c-l c-code">{physical.code}</td>
        <td className="c-l c-title" data-name={physical.code}>{physical.name}</td>
        <td className="c-l" data-name="区分">特定</td>
        <td className="c-l" data-name="数量">{formattedQuantities(physical.balanceQuiantity)}</td>
        <td className="c-l" data-name="取得単価">{formatCurrency(Number(physical.bookPrice).toFixed(0))}円</td>
        <td className="c-l" data-name="取得額">{formatCurrency(Number(physical.balanceQuiantity * physical.bookPrice).toFixed(0))}円</td>
        <td className="c-l" data-name="時価評価額">{formatCurrency(Number(physical.currentValue).toFixed(0))}円</td>
        <td className="c-l" data-name="評価損益">{formatCurrency(Number(physical.currentProfit).toFixed(0))}円</td>
        <td className="c-c">{renderSellButton} <CancelStockOrderModal hasOrder={this.state.isOpen} tab={this.state.tab} /></td>
      </tr>
    );
  }
}

export default StockRow;
