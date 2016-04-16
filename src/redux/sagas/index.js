import { takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';

import { COUNTER_TRIPLE, increment } from '../modules/counter';

function * counterTriple ( state ) {
  let counter = yield select( ( state ) => state.counter );
  yield put( increment( counter * 2 ) );
}

function * watchCounterTriple ( state ) {
  while ( true ) {
    yield * takeEvery( COUNTER_TRIPLE, counterTriple, state );
  }
}

export function * rootSaga ( state ) {
  yield [
    fork( watchCounterTriple, state )
  ];
}
