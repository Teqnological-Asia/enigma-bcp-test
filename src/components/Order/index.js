import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { formatDateTime } from '../../utils';
import OrderList from "./OrderList";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDateTime: new Date(),
    };
  }

  onChangeTab = (tab) => {
    this.props.changeOrderTab(tab);
  };

  componentDidMount() {
    this.props.loadOrdersRequest()
  }

  render() {
    const { orders,tab } = this.props;
    const JPSTockType = ["STOCK", "ETF"];
    const USSTockType = ["US_STOCK"];
    const orderList = <OrderList orders={orders} typesOfStock={(tab) === 1 ? JPSTockType : USSTockType} />

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">注文 <b>照会</b></div>
            <div className="p-section_header_aside">
              <span> {formatDateTime(this.state.curDateTime)} </span>
              (<a className="icon-arrows-ccw cursor" onClick={this.reloadData}>更新</a>）
            </div>
          </div>
        </div>
        <div className="p-nav_sub">
          <ul>
            <li className={`custom ${(tab) === 1 ? 'is_current_custom' : ''}`}>
              <a onClick={() => this.onChangeTab(1)}>国内株式</a>
            </li>
            <li className={`custom ${(tab) === 2 ? 'is_current_custom' : ''}`}>
              <a onClick={() => this.onChangeTab(2)}>米国株式</a>
            </li>
          </ul>
        </div>
        <div className="u-mt20p">
          {orderList}
        </div>
        <div className="u-mt40p">
          <div className="p-section_lead">
            <p>※当緊急時取引メニューは、現物株式の売却および信用建玉の返済の受付のみに限定させていただいております。上記「注文照会」に「現物買」
              「信用新規」注文が表示されている場合がありますが、「取消」をされた場合、再度発注することはできませんので、あらかじめご了承願います。</p>
            <p>※注文の訂正はできません。訂正する場合には一旦注文の取消後、再度注文（現物株式の売却、信用取引の決済）を発注ください。</p>
          </div>
        </div>
      </div>
    )
  }
}

Order.childContextTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number
}

export default Order;
