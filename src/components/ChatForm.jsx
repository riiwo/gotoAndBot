import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Receiver from '../services/Receiver';

export default class ChatForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Fire');
    console.log(Receiver({ input: this.state.value }));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="chat-form">
        <input type="text" placeholder="Write here" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">
          <FontAwesomeIcon icon="chevron-right"/>
        </button>
      </form>
    )
  }

}
