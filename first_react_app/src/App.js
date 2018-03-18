import React, { Component } from 'react';
import CreationForm from './components/creation_form';
import Shout from './components/shout';
import Layout from './components/layout';

class App extends Component {
  constructor(props) {
    super(props)
    const AVATAR_ONE = 'https://i.imgur.com/sf0LhCb.jpg'
    const AVATAR_TWO = 'https://avatars1.githubusercontent.com/u/35630953?s=460&v=4'
    this.state = {
      users: [{
        user: {
          name: 'Johnny',
          id: '@JohnnyBravo',
          message: 'Enough about you, let\'s talk about me, Johnny Bravo.',
          date: '3/16/2018',
          avatar: AVATAR_ONE
        },
        social: {
          like: 0,
          retweet: 0,
          comment: 0
        },
        key: 0
      },
      {
        user: {
          name: 'D. K.',
          id: '@orion-z',
          message: 'This app was written in React. It uses Bootstrap for design. Structure done with JSX, logic done with Vanilla JS. Fonts imported with Google Fonts. Icons displayed by FontAwesome CDN. New shouts are not being saved.',
          date: '3/17/2018',
          avatar: AVATAR_TWO
        },
        social: {
          like: 0,
          retweet: 0,
          comment: 0
        },
        key: 1
      }],
      len: 2
    }
  }

  handleDeleteClick = (keyIn, e) => {
    let copiedState = Object.assign({}, this.state)
    const index = copiedState.users.map(e => { return e.key }).indexOf(keyIn);
    copiedState.users.splice(index, 1)
    this.setState({
      users: copiedState.users,
      len: copiedState.len
    })
  }

  handleSubmit = (data, e) => {
    const len = this.state.len + 1;
    e.preventDefault();
    if (!data.id.startsWith("@")) {
      data.id = "@" + data.id;
    }
    data.id = data.id.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    let re = /\s/;
    if (re.test(data.id)) {
      alert('ID may not contain space characters');
      return false;
    }
    this.setState({
      users: this.state.users.concat([{
        user: {
          name: data.name,
          id: data.id,
          message: data.message,
          date: this.date,
          avatar: this.avatar
        },
        social: {
          like: 0,
          retweet: 0,
          comment: 0
        },
        key: len
      }]),
      len: len
    })
  }

  handleSocialClick = (data) => {
    let users = this.state.users
    users[0].social = data
    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App">
        <Layout />
        <CreationForm handleSubmit={this.handleSubmit} />
        <Shout users={this.state.users} handleSocialClick={this.handleSocialClick} handleDeleteClick={this.handleDeleteClick} />
      </div>
    );
  }
}

export default App;
