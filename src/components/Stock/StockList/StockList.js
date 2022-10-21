import React from 'react';
import EmptyTableRow from '../../Authenticated/EmptyTableRow';
import PhysicalRow from './StockRow';

const StockList = ({ orders, physicals, isInternalMarket }) => {
  const renderPhysicals = (orders,physicals) => {
    if (physicals.length > 0) {
      return physicals.map((physical, key) => (
        <PhysicalRow {...{ orders, physical, key }} isInternalMarket={isInternalMarket} />
      ));
    } else {
      return <EmptyTableRow message="明細はありません。" />;
    }
  }

  return (
    <div className="u-mt20p">
      <table className="c-table_list">
        <thead>
          <tr>
            <th className="c-l" >銘柄コード</th>
            <th className="c-l">銘柄名</th>
            <th className="c-l">区分</th>
            <th className="c-l">数量</th>
            <th className="c-l">参考取得単価</th>
            <th className="c-l">取得額</th>
            <th className="c-l">時価評価額</th>
            <th className="c-l">評価損益</th>
            <th className="c-c">売却</th>
          </tr>
        </thead>
        <tbody>
          {renderPhysicals(orders, physicals)}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
