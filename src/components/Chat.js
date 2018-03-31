import React from 'react';
import PropTypes from 'prop-types';

import './Chat.css';

import MessageBubble from './MessageBubble';
import NewMessage from './NewMessage';
import Loading from './Loading';

class Chat extends React.Component {
  componentDidMount() {
    this.props.onChatLoad();
  }

  render() {
    return (
      <div className="Chat">
        {this.props.isLoading && <Loading />}
        <div className="Chat__messages">
          {this.props.messages.map(m =>
            (<MessageBubble
              key={m.id}
              author={m.author}
              message={m.message}
              timestamp={m.timestamp}
              isOwn={m.isOwn}
            />))
          }
        </div>
        <div className="Chat__new-message-bar">
          <NewMessage onMessageSend={this.props.onNewMessage} />
        </div>
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
