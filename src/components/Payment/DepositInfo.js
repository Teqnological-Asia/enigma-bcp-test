import React from 'react';
import { depositAccountTypes } from './common';

const DepositInfo = ({cashTransfer}) => {
  return (
    <div className="u-mt40p">
      <div className="p-section_header">
        <div className="p-section_header_title">
          お客さま専用入金口座
        </div>
      </div>
      {cashTransfer && <div className="p-section_bankaccount u-mt20p">
        <dl>
          <dt>振込先</dt>
          <dd>{cashTransfer.name} {cashTransfer.branchName} {depositAccountTypes[cashTransfer.type]} {cashTransfer.number}</dd>
          <dt>口座名義</dt>
          <dd>{cashTransfer.holderName}</dd>
        </dl>
      </div>}
      <div className="u-mt20p">
        <div className="p-section_lead">
          <p>
            ※同一口座名義人からのお振込みをお願いします。
          </p>
          <p>
            ※ご入金の手数料はお客様ご負担となります。
          </p>
        </div>
      </div>
    </div>
  );
}

export default DepositInfo;
