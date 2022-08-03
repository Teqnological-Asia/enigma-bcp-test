import React from 'react';
import { USStockTradingRule} from './CautionText';

const USCautionBox = ({ onChecked }) => {
  const {checkText } = USStockTradingRule;

  const handleChecked = () => {
    onChecked();
  }

  return (
      <div className="u-mt20p">
        <div className="caution-area" style={{backgroundColor: 'transparent', padding: 0}}>
          <div style={{ display: 'inline-flex' }}>
            <input
              type='checkbox'
              name= 'USStockTradingRule'
              id='USStockTradingRule'
              onClick={() => handleChecked()}
            />
            <label for='USStockTradingRule'>
            </label>
            <div className="caution--footer">
              {checkText}
            </div>
          </div>
        </div>
      </div>
  );
}

export default USCautionBox;
