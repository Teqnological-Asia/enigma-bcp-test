import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class OrderInfo extends Component {
  constructor(props) {
    super(props);
    this.stockCode = this.props.match.params.code;
  }
  render() {
    const { stockDetail, orderQuantity, isUSStock } = this.props;
    if (!stockDetail || !orderQuantity) return <Redirect to={{ pathname: `/account/${isUSStock ? "us-stock" : "physical"}/${this.stockCode}/order` }} />;
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
                  <th>取引</th>
                  <td>現物売却</td>
                </tr>
                <tr>
                  <th>数量</th>
                  <td>{orderQuantity}株</td>
                </tr>
                <tr>
                  <th>執行条件</th>
                  <td>相対</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderInfo;
