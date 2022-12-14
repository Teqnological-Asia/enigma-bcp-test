import React, { Component } from 'react';
import PaymentCancelList from './PaymentCancelList';

class PaymentCancel extends Component {
  componentDidMount() {
    this.props.loadPaymentCancelListRequest();
  }

  render() {
    const { payments } = this.props;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金取消</div>
            <div className="p-section_header_aside">※出金のお取消しは受渡日（出金予定日）の前営業日15:30まで可能です。</div>
          </div>
        </div>
        <div className="u-mt20p">
          <PaymentCancelList payments={payments} />
        </div>
      </div>
    );
  }
}

export default PaymentCancel;
