import React from 'react';

const Header = ({ curDateTime, onReloadData,textOfStockMarket }) => {
  return (
    <div className="u-mt40p">
      <div className="p-section_header">
        <div className="p-section_header_title">{textOfStockMarket}<b>売却</b></div>
        <div className="p-section_header_aside">
          <span> {curDateTime} </span>
          (<a className="icon-arrows-ccw cursor" onClick={onReloadData}>更新</a>）
        </div>
      </div>
    </div>
  );
}

export default Header;