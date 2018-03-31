import { connect } from 'react-redux';

import * as msgActions from '../actions/messages';

import Chat from '../components/Chat';

const mapStateToProps = state => ({
  messages: state.messages,
  isLoading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onChatLoad: () => dispatch(msgActions.getMessages()),
  onNewMessage: message => dispatch(msgActions.sendMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
