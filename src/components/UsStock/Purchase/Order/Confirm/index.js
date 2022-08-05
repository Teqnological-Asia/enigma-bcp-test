import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OrderInfo from '../OrderInfo'

class UsStockPurchaseOrderConfirm extends Component {
  constructor(props) {
    super(props);

    this.stockCode = this.props.match.params.code;

    this.state = {
      isSubmitting: false
    }
  }

  onUnload = (event) => {
    event.returnValue = "unload";
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.isSubmitting) {
      this.setState({isSubmitting: true});

      this.props.createPurchaseOrderConfirm(this.stockCode).then((result) => {
        this.setState({isSubmitting: false});
      });
    }
  }

  render() {
    const { stockDetail, orderSendParams  } = this.props;

    if (stockDetail == null || orderSendParams == null) return <Redirect to={{ pathname: `/account/us-stock/${this.stockCode}/purchase` }} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">米国株式売却 <b>取引入力</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>内容をご確認いただき「発注する」を押すとご注文が確定します。</p>
          </div>
        </div>
        <OrderInfo {...this.props} />
        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to={`/account/us-stock/${this.stockCode}/purchase`}>一覧へ戻る</Link>
          <a className="c-button" onClick={this.handleSubmit}>発注する</a>
        </div>
      </div>
    );
  }
}

export default UsStockPurchaseOrderConfirm;