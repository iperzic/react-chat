import React from 'react';
import PropTypes from 'prop-types';

import './MessageList.css';

import MessageBubble from './MessageBubble';

const MessageList = ({ messages }) =>
  (
    <div className="MessageList">
      {messages.map(m =>
        (<MessageBubble
          key={m.id}
          author={m.author}
          message={m.message}
          timestamp={m.timestamp}
          isOwn={m.isOwn}
        />))
      }
    </div>
  );


MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    isOwn: PropTypes.bool.isRequired,
  })).isRequired,
};

export default MessageList;
