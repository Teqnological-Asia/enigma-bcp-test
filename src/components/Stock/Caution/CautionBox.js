import React from 'react';
import { excutive, insider } from './CautionText';
import { splitLine } from '../../../utils';

const CautionBox = ({ isShow, typeOfWarning, onSelect }) => {
  const { headerText, bodyText, checkText } = typeOfWarning === 'insider' ? insider : excutive;

  const [insiderCaution, setInsiderCaution] = React.useState(false);
  const [excutiveCaution, setExcutiveCaution] = React.useState(false);

  const handleSelect = () => {
    if (typeOfWarning === 'insider') {
      setInsiderCaution(!insiderCaution);
    }
    else {
      setExcutiveCaution(!excutiveCaution);
    }
    const caution = typeOfWarning === 'insider' ? { type: "insider", checked: insiderCaution ? false : true } : { type: "executive", checked: excutiveCaution ? false : true };
    onSelect(caution);
  }

  return (
    isShow ?
      (<div className="u-mt20p">
        <div className="caution-area" >
          <div className="caution--header" > {headerText} </div>
          <div className="caution--body" >
            {splitLine(bodyText).map((line, index) => {
              return <div key={index}>{line}</div>;
            })}
          </div>
          <div style={{ display: 'inline-flex' }}>
            <input
              type='checkbox'
              name={typeOfWarning}
              id={typeOfWarning}
              onClick={() => handleSelect(typeOfWarning)}
            />
            <label for={typeOfWarning}>
            </label>
            <div className="caution--footer">
              {checkText}
            </div>
          </div>
        </div>
      </div>) : null
  );
}

export default CautionBox;