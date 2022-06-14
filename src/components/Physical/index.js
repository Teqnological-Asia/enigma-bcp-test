import React, { Component } from 'react';
import StockList from './../Stock/StockList/StockList';
import Header from './../Stock/StockList/Header';
import { formatDateTime,filterStockList } from '../../utils';

class Physical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDateTime: new Date(),
    };
  }

  componentDidMount() {
    this.props.loadPhysicalsRequest();
    this.props.createOrderSuccess();
  }

  reloadData = () => {
    this.props.loadPhysicalsRequest();
    this.setState({curDateTime: new Date()});
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <Header 
        curDateTime={formatDateTime(this.state.curDateTime)}
        onReloadData={this.reloadData}
        textOfStockMarket="国内株式"
        />
        <StockList physicals={filterStockList(this.props.physicals,["STOCK","ETF"])} isInternalMarket/> 
      </div>
    );
  }
}

export default Physical;