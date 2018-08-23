import React, { Component } from 'react';

import { Header } from '../components/Header';
import MessageStream from '../components/MessageStream';
import ChatForm from '../components/ChatForm';

import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class Bot extends Component {

  componentDidMount() {
    this.props.onSendMessage(
      'bot',
      "This is <b>gotoAndBot!</b><br>" +
      "Please enter your requests in free form<br>" +
      "I can do following:<br>"+
      "  - Greet you<br>"+
      "  - Tell you my age<br>"+
      "  - Make calculations with +, -, /, *<br>"+
      "  - Tell you time at the moment and in many other countries and some bigger cities<br>"+
      "  - Convert currencies (Use ISO 4217: EUR, USD etc.)<br>"+
      "  - Tell you the weather in many cities (Use capital case for cities)<br>"+
      "Have fun!"
    );
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
