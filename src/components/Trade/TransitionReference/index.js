import React, { Component } from "react";
import TradeTransitionList from './TradeTransitionList'
class TransitionReference extends Component{


  componentDidMount() {
    this.props.loadTradeTransitionReferenceRequest();
  }
  render(){
    const {tradeTransitionReference} = this.props
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用保証金推移</div>
          </div>
        </div>
        <div className="u-mt40p">
          <TradeTransitionList tradeTransitionReference={tradeTransitionReference}/>
        </div>
      </div>
    );
  }
}

export default TransitionReference