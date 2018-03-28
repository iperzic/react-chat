import { fork, all } from 'redux-saga/effects';
import messagesSaga from './messages';

export default function* rootSaga() {
  yield all([
    fork(messagesSaga),
  ]);
}
