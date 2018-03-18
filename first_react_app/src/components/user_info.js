import React, { Component } from 'react';

class UserInfo extends Component {
  chooseBitmap = () => {
    let num = Math.floor(Math.random() * 7);
    return './assets/img/bitmap' + num + '.jpg';
  }

  fetchAvatar = () => {
    if (this.props.user.avatar) {
      return this.props.user.avatar
    } else {
      return this.chooseBitmap();
    }
  }

  fetchDate = () => {
    if (this.props.user.date) {
      return this.props.user.date
    } else {
      return new Date().toLocaleDateString();
    }
  }

  avatarSource = this.fetchAvatar();
  dateSource = this.fetchDate();

  render() {
    return (
      <div className="user-div" key={this.props.user.key}>
        <div className="user-info">
          <div className="user"><img src={this.avatarSource} alt="" /></div>
          <div className="user">{this.props.user.name} <small>{this.props.user.id}</small></div>
          <div className="user date">{this.dateSource}</div>
        </div>
        <div className="user message">{this.props.user.message}</div>
      </div>
    )
  }
}

export default UserInfo;
