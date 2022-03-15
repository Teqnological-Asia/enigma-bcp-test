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
          移管を希望の方は以下にお問い合わせをお願いいたします。
        </div>
        <div className="p-contact contact_information">
          <div className="p-line"></div>
          <div className="information_left">
            <p>固定電話</p>
            <p>0120-102-115</p>
            <p>(フリーダイヤル)</p>
          </div>
          <div className="p-line"></div>
          <div className="information_right">
            <p>携帯電話</p>
            <p>050-1746-4939</p>
            <p>(通話料はお客様のご負担になります)</p>
          </div>
        </div>
        <div className="p-section_lead u-mt40p size-text">
          <p>※移管1銘柄につき、1,100円（消費税込み）の手数料をいただきます。</p>
          <p>※ご注文中、または受渡日を迎えていない銘柄は、手続きを行なうことはできません。</p>
          <p>※特定口座株式の場合、お預かりの全株式数を移管いただきます。一部株式数の移管はできません。主口座・副口座に同じ銘柄のお預かりがある場合は、合算した全株式数を移管いたします。</p>
          <p>※移管先証券会社の都合で他社移管できない場合があります。（保管振替機構への加入者情報登録が行われていない場合など）</p>
          <p>※権利確定のための基準日が設定された場合、権利付最終日の15時より、移管手続を承ることができません。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;ただし、決算期によっては、移管手続停止期間が、基準日の1週間前より行われる場合があります。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;月の下旬に係る移管手続は承れない場合がありますのでご注意ください</p>
        </div>
      </div>
    );
  }
}

export default Delivery;
