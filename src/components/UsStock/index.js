import React, { Component } from 'react';
import StockList from './../Stock/StockList/StockList';
import Header from './../Stock/StockList/Header';
import { formatDateTime, filterStockList } from '../../utils';

class UsStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDateTime: new Date(),
    };
  }

  componentDidMount() {
    this.props.loadOrdersRequest();
    this.props.loadPhysicalsRequest();
    this.props.createOrderSuccess();
  }

  reloadData = () => {
    this.props.loadPhysicalsRequest();
    this.setState({ curDateTime: new Date() });
  }


  render() {
    return (
      <div className="l-contents_body_inner">
        <Header
          curDateTime={formatDateTime(this.state.curDateTime)}
          onReloadData={this.reloadData}
          textOfStockMarket="米国株式"
        />
        <StockList orders={this.props.orders} physicals={filterStockList(this.props.physicals, ["US_STOCK"])} />
      </div>
    );
  }
}

export default UsStock;