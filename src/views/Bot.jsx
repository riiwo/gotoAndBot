import React, { Component } from 'react';

import { Header } from '../components/Header';
import MessageStream from '../components/MessageStream';
import ChatForm from '../components/ChatForm';

import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class Bot extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.onSendMessage('bot', 'Hello there!', null);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MessageStream />
        <ChatForm />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state.currencies;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (from, message, action) => { dispatch(ActionCreators.sendMessage(from, message, action)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bot);
