import React, { Component } from 'react';
import UserInfo from './user_info';
import SocialInfo from './social_info';

class Shout extends Component {
  render() {
    return (
      <div>
        {this.props.users.slice(0).reverse().map(x => {
          return (
          <div className="card bg-light" key={x.key}>
            <UserInfo user={x.user} />
            <SocialInfo social={x} handleSocialClick={this.props.handleSocialClick} handleDeleteClick={this.props.handleDeleteClick}/>
          </div>)
        })}
      </div>
    )
  }
}

export default Shout;
