import { fork, all } from 'redux-saga/effects';
import { watchFetchArt } from './artSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchArt),
    ])
}