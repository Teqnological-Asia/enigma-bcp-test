import React, { Component } from 'react';
import store from '../../../store';
import { push } from "react-router-redux";
import { changeOrderTab } from '../../../actions/order'

class CancelStockOrderModal extends Component {
  render() {
    const { hasOrder, tab } = this.props;
    const gotoOrder = (tab) => {
      store.dispatch(changeOrderTab(tab));
      store.dispatch(push('/account/order'));
    }
    if (hasOrder) {
      return (
        <div className="p-modal">
          <input className="p-modal_isopen" id="modal_open_logout" type="radio" name="modal_switch_logout" defaultChecked/>
          <div className="p-modal_overlay_logout"></div>
          <div className="p-modal_window">
            <div className="p-modal_window_contents">
              <div className="p-modal_window_msg_cancel">
                <p>この銘柄は既に売却注文を受付中です。</p>
                <p>再度注文するには一度注文を取り消してください</p>
                <div className="u-mt20p">
                  <a className="c-button" onClick={() => gotoOrder(tab)}>注文照会へ </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default CancelStockOrderModal;