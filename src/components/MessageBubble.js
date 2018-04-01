import React from 'react';
import PropTypes from 'prop-types';

import './MessageBubble.css';

const MessageBubble = ({
  author, message, timestamp, isOwn,
}) => (
  <div className={isOwn ? 'MessageBubble--own' : 'MessageBubble'}>
    <div className={isOwn ? 'MessageBubble__container--own' : 'MessageBubble__container'}>
      {!isOwn &&
      <div className="MessageBubble__author">
        {author}
      </div>
      }
      <div className="MessageBubble__message">
        {message}
      </div>
      <div className={isOwn ? 'MessageBubble__timestamp--own' : 'MessageBubble__timestamp'}>
        {timestamp}
      </div>
    </div>
  </div>
);

MessageBubble.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isOwn: PropTypes.bool.isRequired,
};

export default MessageBubble;
