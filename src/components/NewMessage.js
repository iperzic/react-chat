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

  handleSendMessage(event) {
    event.preventDefault();
    this.props.onMessageSend(this.state.message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="NewMessage">
        <form className="NewMessage__container" onSubmit={this.handleSendMessage}>
          <input
            className="NewMessage__input"
            required
            type="text"
            placeholder=" Message"
            onChange={this.handleMessageTyping}
            value={this.state.message}
            maxLength="256"
          />
          <button
            className="NewMessage__button"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>);
  }
}

NewMessage.propTypes = {
  onMessageSend: PropTypes.func.isRequired,
};

export default NewMessage;
