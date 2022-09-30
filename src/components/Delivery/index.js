import React, { Component } from 'react';

class Delivery extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">お問い合わせ先</div>
          </div>
        </div>
        <div className="p-contact">
          株式会社スマートプラス　コレカブお客さま窓口
        </div>
        <div className="p-contact">
          ・電話番号：0120-540-278
          <br />
          ・メール：support-collekabu@smartplus-sec.com
        </div>
        <div className="p-contact">
          ※メールでのお問い合わせは一般的な回答になる場合がございます。
          <br />
          ・受付時間：月曜〜金曜 8時30分から17時30分（祝日、年末年始除く）
        </div>
        <div className="p-section_lead u-mt40p size-text">
          <div className="p-body">
            ※移管1銘柄につき、1,100円（消費税込み）の手数料をいただきます。
          </div>
          <div className="p-body">
            ※ご注文中、または受渡日を迎えていない銘柄は、手続きを行なうことはできません。
          </div>
          <div className="p-body">
            ※特定口座株式の場合、お預かりの全株式数を移管いただきます。一部株式数の移管はできません。主口座・副口座に同じ銘柄のお預かりがある場合は、合算した全株式数を移管いたします。
          </div>
          <div className="p-body">
            ※移管先証券会社の都合で他社移管できない場合があります。（保管振替機構への加入者情報登録が行われていない場合など）
          </div>
          <div className="p-body">
            ※権利確定のための基準日が設定された場合、権利付最終日の15時より、移管手続を承ることができません。
          </div>
          <div className="p-body">
            &nbsp;&nbsp;&nbsp;&nbsp;ただし、決算期によっては、移管手続停止期間が、基準日の1週間前より行われる場合があります。
          </div>
          <div className="p-body">
            &nbsp;&nbsp;&nbsp;&nbsp;月の下旬に係る移管手続は承れない場合がありますのでご注意ください
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
