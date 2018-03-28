import * as msgTypes from '../actions/messages.const';

const defaultState = {
  loading: false,
  error: '',
  messages: [],
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
          timestamp: new Date(msg.timestamp).toDateString(),
          isOwn: msg.author === 'Igor Perzic',
        })),
      });
    case msgTypes.GET_MESSAGES_FAILURE:
      return ({
        ...state,
        loading: false,
        error: action.payload.error,
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
        error: action.payload.error,
      });
    default:
      return state;
  }
};
