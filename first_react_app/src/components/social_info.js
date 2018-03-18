import React, { Component } from 'react';

class SocialInfo extends Component {
  data = this.props.social.social;

  onClick = (id, e) => {
    this.data[id] += 1
    this.props.handleSocialClick(this.data)
  }

  onReset = (e) => {
    e.preventDefault();
    this.data = {
      like: 0,
      retweet: 0,
      comment: 0
    }
    this.props.handleSocialClick(this.data)
  }

  render() {
    return (
      <div className="social-div">
        <div className="social btn btn-info" onClick={(e) => this.onReset(e)}>Reset</div>
        <div className="social" onClick={(e) => this.onClick('like', e)}><i className="fas fa-heart"></i> {this.data.like} </div>
        <div className="social" onClick={(e) => this.onClick('retweet', e)}><i className="fas fa-retweet"></i> {this.data.retweet} </div>
        <div className="social" onClick={(e) => this.onClick('comment', e)}><i className="fas fa-comment"></i> {this.data.comment} </div>
        <div className="social btn btn-danger" onClick={(e) => this.props.handleDeleteClick(this.props.social.key, e)}>Delete</div>
      </div>
    )
  }
}

export default SocialInfo;
