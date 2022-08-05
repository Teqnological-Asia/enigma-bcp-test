import React, { Component } from "react";
import UsStockList from "./UsStockList";

class UsStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDateTime: new Date(),
    };
  }

  componentDidMount() {
    this.props.loadUsStocksRequest('Purchase');
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">
              米国株式購入
            </div>
          </div>
        </div>
        <UsStockList usStocksIntraday={this.props.intraday}  usStocks={this.props.usStocks.items} getIntradayInfo={this.props.getIntradayInfo}/>
      </div>
    );
  }
}

export default UsStock;
