import React, { Component } from 'react';

import { Header } from '../components/Header';
import MessageStream from '../components/MessageStream';
import ChatForm from '../components/ChatForm';

import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class Bot extends Component {

  componentDidMount() {
    this.props.onSendMessage('bot', 'Hello there!');
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MessageStream />
        <ChatForm onSendMessage={ this.props.onSendMessage }/>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (from, actionOrMessage, props = {}) => {
      dispatch(ActionCreators.sendMessage(from, actionOrMessage, props))
    }
  };
};

export default connect(null, mapDispatchToProps)(Bot);
