import React, { Component } from 'react';

class ReportOutput extends Component {
  componentDidMount() {
    this.props.loadIframeUrlRequest();
  }

  render() {
    const { url } = this.props;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">電子交付サービス</div>
            <div className="p-section_header_aside">
              ※特定口座年間取引報告書は取引残高報告書メニューからご確認頂けます。
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          {url && <iframe src={url} title="trade-tax" width="100%" height="500px" scrolling="true" frameBorder="0" allowtransparency="yes" ></iframe>}
        </div>
        <div className="p-section_lead u-mt20p size-text">
          <p>※「取引報告書」は副口座分が主口座に合算されて表示されます。</p>
          <p>※「取引残高報告書」の「特定口座のお預かり残高」の項目は、副口座分が主口座に合算されており、副口座分は表示されません。</p>
        </div>
      </div>
    );
  }
}

export default ReportOutput;
