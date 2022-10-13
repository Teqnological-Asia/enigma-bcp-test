import React, { Component } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createError} from "../../actions/error";
class CloseAccountHome extends Component {
  componentDidMount() {
    this.props.loadAccountsInfoRequest();
  }
  render() {
    const {currentAccount } = this.props;
    const closeAccountDoc={
      "main":"close-all",
      "normal":"close-korekabu",
    }

    if(!currentAccount){
      return null;
    }

    const handleCloseAccount = () => {
      const { branchCode, type } = currentAccount;
      const closeAccountDocUrlName = (branchCode && type) && (branchCode === "235" ? (type.toUpperCase() === "NORMAL" ? closeAccountDoc.normal : closeAccountDoc.main) : undefined);
      closeAccountDocUrlName ? window.open(`https://smartplus-sec.com/support/${closeAccountDocUrlName}.pdf`, "_blank") : this.props.createError("予期せぬエラーが発生しました​")
    }

    return (
      <div className="content-body">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">口座廃止のお申し出​</div>
          </div>
          <p className="nisa-description">
            口座を廃止したい場合は以下より書面をダウンロードし印刷、ご記入の上ご返送ください。
            <br />
            お申し出にあたり、以下のご注意事項を必ずよくご確認ください。
            <br />
          </p>
          <p className="nisa-description" style={{ marginTop: 20 }}>
            ＜ご注意事項＞<br />
            ・有価証券・お預り金がない状態でないとお受けできません。お預かり資産の売却、出金、移管等の手続きを予め行ってください。<br />
            ※当社の出金最低金額は1,000円となっているため、お預かり残金が1,000円未満の場合、「口座廃止書面」の到着・受付後、ご登録の出金先金融機関の口座<br />
            へお振込みいたします。なお、出金先金融機関に着金ができない場合、ご連絡をさせて頂きます。<br />
            ・主口座を廃止しようとする場合、弊社にて開設した全ての副口座を含むお取引口座すべてについて廃止手続きを進めさせていただきます。<br />
            尚、いずれかの副口座に有価証券・お預かり金がある場合廃止手続きをお受けできませんので、お預かり資産の売却、出金、移管等の手続きを予め行ってください。<br />
            ・証券総合口座の解約手続きは、翌年3月末に行います。翌年3月末までは申告に必要な書類等を取得できるよう、お客さま口座にログインが可能な状態とな<br />
            ります。また、解約手続き完了前に、当社、他サービスの口座開設を申請いただいた場合、主口座と副口座の関係により、ご申請の口座閉鎖手続きは、キャ
            ンセルさせていただく場合がございます。<br />
            ・信用取引を行ったお客さまで、配当落調整金の支払いが発生した場合、当社から後日ご請求をさせて頂きます。<br />
            ・配当金、配当落調整金の受取りが発生した場合、お客さまの出金先金融機関へお振込をさせて頂きます。出金先金融機関に着金ができない場合、ご連絡をさせて頂きます。<br />
            ・不公正取引や証券事故など、関係各機関からの調査依頼があった場合のほか、当社が必要と認める場合には、ご連絡を差し上げ場合があることを予めご理解ください。<br />
            ・証券総合口座廃止届出書のご提出時は、必ず本人確認書類貼付けシートに本人確認書類の写しを貼り付け、同封してください。<br />
            なお、口座廃止届出時に本人確認書類と認められる書類については、貼付けシートに記載の案内をご確認ください。
          </p>
          <button
            className="btn_close"
            style={{color: '#fff'}}
            rel="noopener noreferrer"
            onClick={handleCloseAccount}
          >
            口座廃止
            <br />
            書面をダウンロード
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createError
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(CloseAccountHome);
