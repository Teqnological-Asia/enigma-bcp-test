import React, { Component } from 'react';

class PaymentDepositConfirm extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入金 <b>（オンライン即時入金）確認</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>以下の金融機関のネットバンキングから入金を行います。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>金融機関</th>
                  <td>三菱UFJ銀行</td>
                </tr>
                <tr>
                  <th>入金指示金額</th>
                  <td>10,000 円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※『提携金融機関における手続きの最後で、「加盟店に通知」「加盟店画面に戻る」「加盟店のサイトへ戻る」「ショップに戻る」等のクリックを必ずおこなってください。先の文言をクリックしなかった場合即時入金が正常に処理されません。（手続きが完了しなかった場合、入金反映が入金当日の夕刻以降、もしくは入金されない場合があります。十分ご注意ください。)』</p>
            <p>※必ずご本人名義の口座からのお手続きください。</p>
            <p>※振込手数料は弊社負担とさせていただきます。</p>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="2-0-0-3.html">金融機関サイトへ</a></div>
      </div>
    );
  }
}

export default PaymentDepositConfirm;
