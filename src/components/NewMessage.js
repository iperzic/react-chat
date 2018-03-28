import React from 'react';
import PropTypes from 'prop-types';

import './NewMessage.css';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleMessageTyping = this.handleMessageTyping.bind(this);
  }

  handleMessageTyping(event) {
    const message = event.currentTarget.value;

    this.setState({ message });
  }

  handleSendMessage() {
    this.props.onMessageSend(this.state.message);
  }

  render() {
    return (
      <div className="NewMessage">
        <div className="NewMessage__input">
          <input type="text" placeholder="message" onChange={this.handleMessageTyping} />
        </div>
        <div className="NewMessage__button">
          <button type="button" onClick={this.handleSendMessage}>Send</button>
        </div>
      </div>);
  }
}

NewMessage.propTypes = {
  onMessageSend: PropTypes.func.isRequired,
};

export default NewMessage;
