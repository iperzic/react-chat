import * as msgTypes from '../actions/messages.const';

import TestStore from '../support/store';

import { author } from '../config';

const defaultState = TestStore.createMessagesStore();

const dateOptions = {
  day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
};

/* eslint no-underscore-dangle: 0 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case msgTypes.GET_MESSAGES:
      return ({
        ...state,
        loading: true,
        error: '',
      });
    case msgTypes.GET_MESSAGES_SUCCESS:
      return ({
        ...state,
        loading: false,
        messages: action.payload.data.map(msg => ({
          id: msg._id,
          author: msg.author,
          message: msg.message,
          timestamp: new Date(msg.timestamp).toLocaleString('en-GB', dateOptions),
          isOwn: msg.author === author,
        })),
      });
    case msgTypes.GET_MESSAGES_FAILURE:
      return ({
        ...state,
        loading: false,
        error: action.message,
      });
    case msgTypes.SEND_MESSAGE:
      return ({
        ...state,
        loading: true,
        error: '',
      });
    case msgTypes.SEND_MESSAGE_SUCCESS:
      return ({
        ...state,
        loading: false,
      });
    case msgTypes.SEND_MESSAGE_FAILURE:
      return ({
        ...state,
        loading: false,
        error: action.message,
      });
    default:
      return state;
  }
};
