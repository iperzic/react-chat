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
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="NewMessage">
        <div className="NewMessage__container">
          <input
            className="NewMessage__input"
            type="text"
            placeholder=" Message"
            onChange={this.handleMessageTyping}
            value={this.state.message}
            maxLength="256"
          />
          <button
            className="NewMessage__button"
            type="button"
            onClick={this.handleSendMessage}
            disabled={!this.state.message}
          >
            Send
          </button>
        </div>
      </div>);
  }
}

NewMessage.propTypes = {
  onMessageSend: PropTypes.func.isRequired,
};

export default NewMessage;
