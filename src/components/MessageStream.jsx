import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { map } from 'lodash';
import { Message } from './Message';


class MessageStream extends React.Component {

  render() {
    const messages = this.props.messages;

    return (
      <div className="message-container">
        { map(messages, (message) => <Message key={message.timestamp} {...message} />) }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state.messages;
};

export default connect(mapStateToProps, {})(MessageStream);
