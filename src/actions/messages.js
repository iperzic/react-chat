import * as msgTypes from './messages.const';

export const getMessages = () => ({
  type: msgTypes.GET_MESSAGES,
});

export const sendMessage = message => ({
  type: msgTypes.SEND_MESSAGE,
  payload: { message },
});
