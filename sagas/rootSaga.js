import { fork, all } from 'redux-saga/effects';
import { watchFetchArt, watchSearchArt } from './artSaga';
import { watchFetchUser, watchUpdateArt, watchArtUser, watchUpdateUser, watchUpdateImage } from './userSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchArt),
        fork(watchSearchArt),
        fork(watchFetchUser),
        fork(watchUpdateArt),
        fork(watchArtUser),
        fork(watchUpdateUser),
        fork(watchUpdateImage)
    ])
}