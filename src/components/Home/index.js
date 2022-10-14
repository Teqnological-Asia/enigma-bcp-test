import { UserAccount } from "@Finatext/baas-common-bcp";
import React, { Component } from 'react';
import ProfileDetail from './ProfileDetail';
import Shomen from './Shomen';
class Home extends Component {
  componentDidMount() {
    this.props.loadProfileRequest();
    this.props.loadAccountsInfoRequest();
  }

  componentWillUnmount() {
    this.props.clearPrivateNotifications();
    this.props.clearPublicNotifications();
  }

  render() {
    const {
      profile,
      documents,
      accounts,
      currentAccount,
      lbxConfirmRequest,
      getDeliverStatus,
      hasFinishReading
    } = this.props;

    return (
      <div className="l-contents_body_inner">
        <Shomen documents={documents} lbxConfirmRequest={lbxConfirmRequest} getDeliverStatus={getDeliverStatus
        } hasFinishReading={hasFinishReading}/>
        <ProfileDetail profile={profile} />
        <UserAccount accounts={accounts} currentAccount={currentAccount}/>
      </div>
    );
  }
}

export default Home;
