import React from 'react';
import PropTypes from 'prop-types';

import './Chat.css';

import MessageBubble from './MessageBubble';
import NewMessage from './NewMessage';

const Chat = ({ messages, onNewMessage }) => (
  <div className="Chat">
    <div className="Chat__messages">
      {messages.map(m =>
        (<MessageBubble
          author={m.author}
          message={m.message}
          timestamp={m.timestamp}
          isOwn={m.isOwn}
        />))
      }
    </div>
    <div className="Chat__new-message-bar">
      <NewMessage onMessageSend={onNewMessage} />
    </div>
  </div>
);

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    isOwn: PropTypes.bool.isRequired,
  })).isRequired,
  onNewMessage: PropTypes.func.isRequired,
};

export default Chat;
