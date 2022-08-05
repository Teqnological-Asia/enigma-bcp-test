import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OrderInfo from './../../../Stock/StockSelling/OrderInfo';

class UsStockSellCompleteContainer extends Component {
  componentWillUnmount() {
    this.props.createOrderSuccess();
  }

  render() {
    const { stockDetail } = this.props;

    const onChangeTab=() => {
      this.props.changeOrderTab(2)
    }

    if (stockDetail == null) return <Redirect to={{ pathname: `/account/us-stock` }} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">米国株式売却 <b>取引受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>お取引を受け付けいたしました。</p>
          </div>
        </div>
        <OrderInfo {...this.props} isUSStock />
        <div className="u-mt20p">
          <Link className="c-button" to="/account/order" onClick={onChangeTab}>注文照会へ</Link>
          <Link className="c-button" to="/account/us-stock">米国株式売却へ</Link>
        </div>
      </div>
    );
  }
}

export default UsStockSellCompleteContainer;