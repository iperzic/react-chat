import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../services/message';
import * as msgTypes from '../actions/messages.const';

function* getMessages() {
  try {
    const data = yield call(api.getMessages);
    yield put({ type: msgTypes.GET_MESSAGES_SUCCESS, payload: { data } });
  } catch (e) {
    yield put({ type: msgTypes.GET_MESSAGES_FAILURE, message: e.message });
  }
}

function* getMessagesSaga() {
  yield takeEvery([msgTypes.GET_MESSAGES, msgTypes.SEND_MESSAGE_SUCCESS], getMessages);
}

function* sendMessage(action) {
  try {
    const messages = yield call(api.sendMessage, action.payload.message);
    yield put({ type: msgTypes.SEND_MESSAGE_SUCCESS, payload: { messages } });
  } catch (e) {
    yield put({ type: msgTypes.SEND_MESSAGE_FAILURE, message: e.message });
  }
}

function* sendMessageSaga() {
  yield takeEvery(msgTypes.SEND_MESSAGE, sendMessage);
}

export default function* messagesSaga() {
  yield all([
    fork(getMessagesSaga),
    fork(sendMessageSaga),
  ]);
}
