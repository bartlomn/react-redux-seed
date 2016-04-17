import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';

import { COUNTER_TRIPLE, increment } from '../modules/counter';

function * counterTriple ( state ) {
  let counter = yield select( ( state ) => state.counter );
  yield put( increment( counter * 2 ) );
}

export function * rootSaga ( state ) {
  yield * takeEvery( COUNTER_TRIPLE, counterTriple, state );
}
