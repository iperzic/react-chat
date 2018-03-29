import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../services/message';
import * as msgTypes from '../actions/messages.const';
import * as msgActions from '../actions/messages';

export function* getMessages() {
  try {
    const data = yield call(api.getMessages);
    yield put(msgActions.getMessagesSuccess(data));
  } catch (e) {
    yield put(msgActions.getMessagesFailure(e));
  }
}

export function* getMessagesSaga() {
  yield takeEvery([msgTypes.GET_MESSAGES, msgTypes.SEND_MESSAGE_SUCCESS], getMessages);
}

export function* sendMessage(action) {
  try {
    yield call(api.sendMessage, action.payload.message);
    yield put(msgActions.sendMessageSuccess());
  } catch (e) {
    yield put(msgActions.sendMessageFailure(e));
  }
}

export function* sendMessageSaga() {
  yield takeEvery(msgTypes.SEND_MESSAGE, sendMessage);
}

export default function* messagesSaga() {
  yield all([
    fork(getMessagesSaga),
    fork(sendMessageSaga),
  ]);
}
