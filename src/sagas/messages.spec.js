import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import * as msgTypes from '../actions/messages.const';
import * as msgActions from '../actions/messages';
import * as Api from '../services/message';
import { getMessages, sendMessage } from './messages';

describe('get messages flow', () => {
  const generator = cloneableGenerator(getMessages)(msgActions.getMessages());
  expect(generator.next().value).toEqual(call(Api.getMessages));

  test('get messages success', () => {
    const clone = generator.clone();
    expect(clone.next([]).value)
      .toEqual(put({ type: msgTypes.GET_MESSAGES_SUCCESS, payload: { data: [] } }));
    expect(clone.next().done).toEqual(true);
  });

  test('get messages error', () => {
    const clone = generator.clone();
    const errorText = 'some error text';
    expect(clone.throw(new Error(errorText)).value).toEqual(put({
      type: msgTypes.GET_MESSAGES_FAILURE,
      message: errorText,
    }));
    expect(clone.next().done).toEqual(true);
  });
});

describe('send message flow', () => {
  const message = 'test message';
  const generator = cloneableGenerator(sendMessage)(msgActions.sendMessage(message));
  expect(generator.next().value).toEqual(call(Api.sendMessage, message));

  test('send message success', () => {
    const clone = generator.clone();
    expect(clone.next().value)
      .toEqual(put({ type: msgTypes.SEND_MESSAGE_SUCCESS }));
    expect(clone.next().done).toEqual(true);
  });

  test('send message error', () => {
    const clone = generator.clone();
    const errorText = 'some error text';
    expect(clone.throw(new Error(errorText)).value).toEqual(put({
      type: msgTypes.SEND_MESSAGE_FAILURE,
      message: errorText,
    }));
    expect(clone.next().done).toEqual(true);
  });
});
