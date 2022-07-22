import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, validateIntegerNumber, validateNumber } from '../../../utils';
import CautionBox from '../Caution/CautionBox';
import { cautionConditions } from '../Helper';
import { ICaution } from './IStockSelling';
import { insider, executive } from '../../../assets/constantVariables';
import USCautionBox from '../Caution/USCautionBox';
import USStockTradingRuleModal from '../Modal/USStockTradingRule';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
class OrderForm extends Component {
  constructor(props) {
    super(props);

    const { quantity, orderType, price } = props.orderFormValues || {};

    this.state = {
      quantity: quantity || '',
      orderType: orderType || 'Market',
      price: price || '',
      cautionDetail: ICaution,
      isClickUSStockCaution: false,
      isShowUSStockTradingModal: false,
    }

    this.validateNumberError = '数値を入力してください';
  }

  targetElement = null;

  componentDidMount() {  
    this.targetElement = document.querySelectorAll('*');
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handleTextChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleRadioChange = (e) => {
    this.setState({ orderType: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { quantity, orderType, price } = this.state;
    const stockCode = this.props.stockCode;

    if (!quantity || !validateIntegerNumber(quantity)) {
      alert(this.validateNumberError);
      return;
    }

    if (orderType === 'Limit' && (!price || !validateNumber(price))) {
      alert(this.validateNumberError);
      return;
    }

    this.props.saveOrderQuantityRequest(quantity, stockCode);
  }

  setShortableQuantity = () => {
    this.setState({ quantity: this.getDefaultQuantity(this.props.physicalDetail) });
  }

  getDefaultQuantity = (physicalDetail) => {
    if (physicalDetail === null) return '';

    const tradeUnit = parseInt(physicalDetail.trade_unit, 10);
    const shortableQuantity = parseInt(physicalDetail.shortable_quantity, 10);
    return Math.floor(shortableQuantity / tradeUnit) * tradeUnit;
  }

  handleChangeQuantity = (e, type) => {
    e.preventDefault();
    const quantity = this.state.quantity;
    let initialQuantity = 1;

    if (quantity === '') {
      this.setState({ quantity: initialQuantity });
      return;
    }

    if (!validateIntegerNumber(quantity)) {
      alert(this.validateNumberError);
      return;
    }

    let parsedQuantity = parseInt(quantity, 10);

    if (type === 'up') {
      parsedQuantity = parsedQuantity + 1;
    } else {
      if (parsedQuantity > 0) {
        parsedQuantity = parsedQuantity - 1;
      }
    }
    this.setState({ quantity: parsedQuantity });
  }

  validateMaxNumChar = (e) => {
    if (this.state.quantity.length + 1 > 9) {
      e.preventDefault();
    }

    if (this.state.price.length + 1 > 9) {
      e.preventDefault();
    }
  }

  isQuantityTypeError = () => {
    const { quantity } = this.state;
    if (quantity <= 0 || !validateIntegerNumber(quantity)) {
      return true;
    }
    return false;
  }

  handleChangePrice = (e, type) => {
    e.preventDefault();
    const price = this.state.price;
    const stockDetail = this.props.stockDetail;
    const priceRangeLower = parseFloat(stockDetail.price_range_lower);
    const priceRangeUpper = parseFloat(stockDetail.price_range_upper);
    const priceRangeRule = stockDetail.price_range_rule;
    const bid = parseFloat(stockDetail.bid);

    if (price === '') {
      if (bid < priceRangeLower) {
        this.setState({ price: priceRangeLower });
      } else if (bid > priceRangeUpper) {
        this.setState({ price: priceRangeUpper });
      } else {
        this.setState({ price: bid });
      }
      return;
    }

    if (!validateNumber(price)) {
      alert(this.validateNumberError);
      return;
    }

    let parsedPrice = parseFloat(price);

    if (parsedPrice < priceRangeLower) {
      this.setState({ price: priceRangeLower });
      return;
    }

    if (parsedPrice > priceRangeUpper) {
      this.setState({ price: priceRangeUpper });
      return;
    }

    let rule = {};
    for (let i = 0; i < priceRangeRule.length; i++) {
      let item = priceRangeRule[i];
      let nextItem = priceRangeRule[i + 1];

      if (item['price'] !== null && parsedPrice === parseFloat(item['price']) && type === 'down') {
        rule = item;
        break;
      }
      if (item['price'] !== null && parsedPrice < item['price']) {
        rule = item;
        break;
      }
      if (nextItem === undefined) {
        rule = item;
        break;
      }
    }

    const step = parseFloat(rule['tick']);
    var priceMin = parseFloat(rule['price']);

    if (isNaN(priceMin)) {
      priceMin = parseFloat(priceRangeRule[priceRangeRule.length - 2].price);
    }

    if (type === 'up') {
      if (step >= 1) {
        parsedPrice = Math.floor(((parsedPrice - priceMin) * 10) / (step * 10)) * step + step + priceMin;
      } else {
        parsedPrice = (((parsedPrice - priceMin) * 10) / (step * 10)) * step + step + priceMin;
        parsedPrice = parsedPrice.toFixed(1);
      }

      if (parsedPrice > priceRangeUpper) {
        parsedPrice = priceRangeUpper;
      }
    } else {
      if (step >= 1) {
        parsedPrice = Math.ceil(((parsedPrice - priceMin) * 10) / (step * 10)) * step + priceMin - step;
      } else {
        parsedPrice = (((parsedPrice - priceMin) * 10) / (step * 10)) * step + priceMin - step;
        parsedPrice = parsedPrice.toFixed(1);
      }

      if (parsedPrice < priceRangeLower) {
        parsedPrice = priceRangeLower;
      }
    }

    this.setState({ price: parsedPrice });
  }

  formattedQuantities = physical => (
    physical && physical.shortable_quantity ? formatCurrency(physical.shortable_quantity) : '-'
  )

  handleClickCautionBox = (caution) => {
    // eslint-disable-next-line
    { ICaution[caution.type].isClick = caution.checked }
    this.setState({ cautionDetail: ICaution });
  }

  handleClickUSCautionBox = () => {
    this.setState({isClickUSCaution: !this.state.isClickUSCaution});
  }

  handleShowUSStockTradingModal = () => {
    this.setState({isShowUSStockTradingModal: true});
    // Disable body scroll
    disableBodyScroll(this.targetElement);
  }

  handleCloseUSStockTradingModal = () => {
    this.setState({isShowUSStockTradingModal: false});
    // Re-enable body scroll
    enableBodyScroll(this.targetElement);
  }

  render() {
    const { stockDetail, isUSStock, userInfo, USSellInput} = this.props;
    const { quantity, orderType, price, cautionDetail } = this.state;
    const isShowUSStockTradingModal = this.state.isShowUSStockTradingModal;

    if (!stockDetail) return null;

    let isJPDisabled = false;
    let isClickCautionInsider = false;
    let isClickCautionExcutive = false;
    let codeCheckedFinal = false;
    let isShowExecutiveCautionBoxFinal = false;

    if (!isUSStock && userInfo) {
      isClickCautionInsider = cautionDetail.insider.isClick;
      isClickCautionExcutive = cautionDetail.executive.isClick;
      const { codeChecked, isShowExecutiveCautionBox } = cautionConditions(stockDetail, userInfo);
      codeCheckedFinal = codeChecked;
      isShowExecutiveCautionBoxFinal = isShowExecutiveCautionBox;
      isJPDisabled = (!isClickCautionInsider && codeChecked) || (!isClickCautionExcutive && isShowExecutiveCautionBox);
    }

    const isDisabled = (isUSStock ? !this.state.isClickUSCaution : isJPDisabled) || this.isQuantityTypeError();
    
    if(isShowUSStockTradingModal) return (
      <USStockTradingRuleModal 
      onClose={this.handleCloseUSStockTradingModal} 
      />
    )

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
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
                    <td>
                      <div className="u-row">
                        <div className="u-col_50 u-col_100_sp">
                          <div className="p-input_updown">
                            <div className="p-input">
                              <input name="quantity" className="u-right" type="text" placeholder="数値を入力してください" onChange={this.handleTextChange} value={quantity} onKeyPress={this.validateMaxNumChar} />
                            </div><span className="p-unit">株</span>
                            <button className="p-input_control p-input_up" onClick={(e) => this.handleChangeQuantity(e, 'up')}>UP</button>
                            <hr />
                            <button className="p-input_control p-input_down" onClick={(e) => this.handleChangeQuantity(e, 'down')}>DOWN</button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>執行条件</th>
                    <td>相対</td>
                  </tr>
                  {
                    (isUSStock && USSellInput) &&
                    <tr>
                      <th style={{ verticalAlign: 'baseline' }}>価格情報</th>
                      <td>
                        <div className="price-container" style={{display: 'block', marginBottom:'1,25rem'}}>
                          <div className="price-item" style={{marginBottom: '1rem'}}>
                            <p className="description">取引参考価格 (1株)</p>
                            <div>
                              <span className="price">
                                {formatCurrency(USSellInput.exchangedPrice)}
                              </span>
                              &nbsp;
                              円
                            </div>
                          </div>
                          <div className="price-item">
                            <p className="description">参考為替レート（米ドル)</p>
                            <div>
                                <span className="price">
                                  {USSellInput.forex.rate}
                                </span>
                                &nbsp;
                                円
                            </div>
                          </div>
                        </div>
                        <div className="notice">
                          <div style={{ marginRight: '15px' }}>※</div>
                          <div>
                          取引参考価格は前日終値を元に0.715%のスプレッドを加味したうえで参考為替レート（為替コストを含みます）を適用した価格になります。
                          </div>
                        </div>
                          <div
                          className="stock-rule"
                          onClick={() => this.handleShowUSStockTradingModal()}
                          >
                            ＞ 米国株式取引ルール
                          </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {isUSStock ? <USCautionBox onChecked={this.handleClickUSCautionBox} />
          : (
            <div>
              <CautionBox
                isShow={codeCheckedFinal}
                typeOfWarning={insider}
                onSelect={this.handleClickCautionBox}
              />
              <CautionBox
                isShow={isShowExecutiveCautionBoxFinal}
                typeOfWarning={executive}
                onSelect={this.handleClickCautionBox}
              />
            </div>
          )
        }

        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to={`/account/${isUSStock ? "us-stock" : "physical"}`}>一覧へ戻る</Link>
          <input className="c-button" type="submit" value="確認画面へ" disabled={isDisabled || !quantity || (orderType === 'Limit' && !price)} />

        </div>
      </form>
    );
  }
}

export default OrderForm;
