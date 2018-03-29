import * as msgTypes from './messages.const';

export const getMessages = () => ({
  type: msgTypes.GET_MESSAGES,
});

export const getMessagesSuccess = data => ({
  type: msgTypes.GET_MESSAGES_SUCCESS,
  payload: { data },
});

export const getMessagesFailure = err => ({
  type: msgTypes.GET_MESSAGES_FAILURE,
  message: err.message,
});

export const sendMessage = message => ({
  type: msgTypes.SEND_MESSAGE,
  payload: { message },
});

export const sendMessageSuccess = () => ({
  type: msgTypes.SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = err => ({
  type: msgTypes.SEND_MESSAGE_FAILURE,
  message: err.message,
});
