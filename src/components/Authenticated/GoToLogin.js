import React, { Component } from "react";
import { splitLine } from "../../utils";

class GoToLogin extends Component {
  bodyText = {
    notOpenAccount: "お客様サポートWEBの利用には「お買い物投資コレカブ」<br/>サービスの口座開設が必要です。",
    maintenance: "ただいまの時間帯はメンテナンス中のため、お客様サポートWEBはご利用になれません。<br/> <br/>＜メンテナンス時間＞<br/>月曜～土曜日：AM3:30 - AM5:30<br/>日曜日：AM3:30 - AM7:30<br/> <br/>上記以外の時間帯でも、臨時でメンテナンスを行う場合がございます。臨時のメンテナンスについてはお知らせページをご覧ください。",
    other: "エラーが発生しました<br/>ットワークの接続をご確認ください",
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
                {splitLine(isStockOrderErr ? this.bodyText.other : (
                  isOpenAccount ? (this.bodyText.maintenance) : (this.bodyText.notOpenAccount))
                ).map((line, index) => {
                  return (line !== ' ' ? <div key={index}>{line}</div> : <br key={index} />);
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
