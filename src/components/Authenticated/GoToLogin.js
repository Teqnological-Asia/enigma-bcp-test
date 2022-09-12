import React, { Component } from "react";
import { createArrayWithId } from "../../utils";

class GoToLogin extends Component {
  constructor(props) {     
    super(props);
    this.state = {
      count: 0,
    }
  }

  bodyText = {
    notOpenAccount: "お客様サポートWEBの利用には「お買い物投資コレカブ」<br/>サービスの口座開設が必要です。",
    // "<br/> <br/>" corresponds to a blank line.
    maintenance: "ただいまの時間帯はシステムメンテナンス中のため、お客さまサポートWEBはご利用いただけません。<br/> <br/>＜メンテナンス時間＞<br/> <br/>月曜日～土曜日・祝日：AM3:30～AM5:30頃<br/>月曜日～土曜日・祝日：AM3:30～AM5:30頃<br/> <br/>※上記以外の時間でも臨時でメンテナンスを行う場合がございます。<br/>臨時メンテナンスについてはコレカブトップのお知らせページをご確認ください。",
    other: "エラーが発生しました<br/>ットワークの接続をご確認ください",
  }

  createBodyTextItemsWithId = (key) => {
    const bodyText = JSON.parse(JSON.stringify(this.bodyText)); //clone object, not mutate original object
    for (let key in bodyText) {
      bodyText[key] = createArrayWithId(bodyText[key], this.state.count);
      // eslint-disable-next-line
      this.state.count += bodyText[key].length;
    }
    return bodyText[key];
  }

  render() {
    const accountStatus = sessionStorage.getItem("account_status");
    const isOpenAccount = accountStatus === "available";
    const stockAndOrderStatus = sessionStorage.getItem("stock_order_err");
    const isStockOrderErr = stockAndOrderStatus === "yes";

    if ((typeof (accountStatus) === "undefined" && accountStatus === null)
      || (typeof (stockAndOrderStatus) === "undefined" && stockAndOrderStatus === null)) {
      return null;
    }

    return (
      <div className="p-modal">
        <input className="p-modal_isopen" id="modal_open_logout" type="radio" name="modal_switch_logout" defaultChecked />
        <div className="p-modal_overlay_logout" style={{ backgroundColor: 'black' }} />
        <div className="p-modal_window">
          <div className="p-modal_window_contents">
            <div className="p-modal_window_msg_logout">
              <div className="go_to_login">
                {this.createBodyTextItemsWithId(isStockOrderErr ? 'other' : (
                  isOpenAccount ? 'maintenance' : 'notOpenAccount')
                ).map((item, index) => {
                  return (item.text !== ' ' ? <div key={item.id}>{item.text}</div> : <br key={item.id} />);
                })}
                <div className="u-mt20p">
                  <a className="c-button" onClick={this.props.goToBassAuthFontSignin}>ログイン画面に戻る</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoToLogin;
