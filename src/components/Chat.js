import React from 'react';
import PropTypes from 'prop-types';

import './Chat.css';

import MessageList from './MessageList';
import NewMessage from './NewMessage';
import Loading from './Loading';

class Chat extends React.Component {
  componentDidMount() {
    this.props.onChatLoad();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.lastMessage.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="Chat">
        {this.props.isLoading && <Loading />}
        <MessageList messages={this.props.messages} />
        <div
          className="Chat__last-message-handle"
          ref={(el) => {
            this.lastMessage = el;
          }}
        />
        <NewMessage onMessageSend={this.props.onNewMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    isOwn: PropTypes.bool.isRequired,
  })).isRequired,
  onNewMessage: PropTypes.func.isRequired,
  onChatLoad: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Chat;
