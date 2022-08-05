import React from "react";
import {transformTransitions, getHeaderTable} from './common'

const TradeTransitionList = ({tradeTransitionReference}) => {
  const hasElement =
    tradeTransitionReference && tradeTransitionReference.length > 0;
  return (
    <div className="c-table-responsive transition-table">
      <table className="c-table c-table_stripe">
        {hasElement && (
          <thead>
            <tr>
              {getHeaderTable(tradeTransitionReference).map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
        )}
        
        <tbody>
          {hasElement && transformTransitions(tradeTransitionReference).map((row) => (
            <tr>
              {row.map((col) => (
                <td className={col.includes('-') ? 'u-minus' : ''}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeTransitionList;
