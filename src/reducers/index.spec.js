import messagesReducer from './index';
import * as msgTypes from '../actions/messages.const';

import TestStore from '../support/store';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const action = undefined;
    const expectedDefaultState = TestStore.createMessagesStore();

    const state = messagesReducer(action, {});

    expect(state).toEqual(expectedDefaultState);
  });

  it('should handle GET_MESSAGES', () => {
    const action = {
      type: msgTypes.GET_MESSAGES,
    };
    const expectedState = TestStore.createMessagesStore(true);

    const state = messagesReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle GET_MESSAGES_SUCCESS', () => {
    const response = [{
      id: 'abc', author: 'Bugs Bunny', message: 'Whats up doc?', timestamp: 'Thu Mar 15 2018', isOwn: false,
    }];
    const action = {
      type: msgTypes.GET_MESSAGES_SUCCESS,
      payload: {
        data: [
          {
            _id: response[0].id,
            author: response[0].author,
            message: response[0].message,
            timestamp: 1521096359339,
          },
        ],
      },
    };
    const expectedState = TestStore.createMessagesStore(false, undefined, response);

    const state = messagesReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle GET_MESSAGES_FAILURE', () => {
    const error = 'some error has occurred';
    const action = {
      type: msgTypes.GET_MESSAGES_FAILURE,
      payload: { error },
    };
    const expectedState = TestStore.createMessagesStore(false, error);

    const state = messagesReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEND_MESSAGE', () => {
    const action = {
      type: msgTypes.SEND_MESSAGE,
    };
    const expectedState = TestStore.createMessagesStore(true);

    const state = messagesReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEND_MESSAGE_SUCCESS', () => {
    const action = {
      type: msgTypes.SEND_MESSAGE_SUCCESS,
    };
    const expectedState = TestStore.createMessagesStore(false);

    const state = messagesReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SEND_MESSAGE_FAILURE', () => {
    const error = 'some error has occurred';
    const action = {
      type: msgTypes.SEND_MESSAGE_FAILURE,
      payload: { error },
    };
    const expectedState = TestStore.createMessagesStore(false, error);

    const state = messagesReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
