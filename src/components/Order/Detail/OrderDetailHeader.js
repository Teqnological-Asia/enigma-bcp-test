import React from 'react';
import { formatCurrency, formatDateTime, formatSide, formatStatus } from '../../../utils';
import { formatExpirationDate } from '../common';

const OrderDetailHeader = ({ order }) => {
  if (!order) return null;

  return (
    <div className="p-section_info">
      <div className="p-section_info_head">
        <div className="p-section_info_number">({order.stock.code})</div>
        <div className="p-section_info_title">{order.stock.name}</div>
        <div className="p-section_info_date">
          <div className="p-section_info_attr">発注時間:</div>
          <div className="p-section_info_value">
            {formatDateTime(order.orderTime)}
          </div>
          <div className="p-section_info_attr">有効期限:</div>
          <div className="p-section_info_value">
            {formatExpirationDate(order)}
          </div>
        </div>
      </div>
      <div className="p-section_info_body">
        <div className="p-section_info_section">
          <div className="p-section_info_attr">区分</div>
          <div className="p-section_info_value" style={{ color: formatSide(order.side).color }}>
            {`現物${formatSide(order.side).side}`}
          </div>
        </div>
        <div className="p-section_info_val">
          <div className="p-section_info_attr">注文金額</div>
          <div className="p-section_info_value en">
            <span className="num">{formatCurrency(order.amount, 0)}</span>
          </div>
        </div>
        <div className="p-section_info_val">
          <div className="p-section_info_attr">取引数量</div>
          <div className="p-section_info_value en">
            <span className="num">{formatCurrency(order.quantity, 0)}</span>
          </div>
        </div>
        <div className="p-section_info_val_done">
          <div className="p-section_info_attr">約定数</div>
          <div className="p-section_info_value en">
            <span className="num">{formatCurrency(order.filledQuantity, 0)}</span>
          </div>
        </div>
        <div className="p-section_info_status">
          <div className="p-section_info_attr">注文状況</div>
          <div className="p-section_info_value">
            {formatStatus(order.status, order.side)}
          </div>
        </div>
        <div className="p-section_info_condition">
          <div className="p-section_info_attr">執行条件</div>
          <div className="p-section_info_value">
            相対
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailHeader;
