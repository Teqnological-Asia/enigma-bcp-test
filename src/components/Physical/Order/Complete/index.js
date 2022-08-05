import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OrderInfo from './../../../Stock/StockSelling/OrderInfo';


class PhysicalOrderComplete extends Component {
  constructor(props) {
    super(props);
    this.stockCode = this.props.match.params.code;
  }
  componentWillUnmount() {
    this.props.createOrderSuccess();
  }

  render() {
    const { stockDetail, orderQuantity } = this.props;

    const onChangeTab=() => {
      this.props.changeOrderTab(1)
    }

    if (!stockDetail || !orderQuantity) return <Redirect to={{ pathname: `/account/physical/${this.stockCode}/order`}} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">国内株式 <b>取引受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご注文を受け付けいたしました。</p>
          </div>
        </div>
        <OrderInfo {...this.props} />
        <div className="u-mt20p">
          <Link className="c-button" to="/account/order" onClick={onChangeTab}>注文照会へ</Link>
          <Link className="c-button" to="/account/physical">国内株式売却へ</Link>
        </div>
      </div>
    );
  }
}

export default PhysicalOrderComplete;