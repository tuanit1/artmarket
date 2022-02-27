import { FETCH_ARTS, FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/actionTypes";
import { put, takeLatest, call } from 'redux-saga/effects';

import { fetchArtAction } from '../actions/';

import { Api } from './Api';

function* fetchArt() {
    try {

        let params = {
            method_name: 'method_get_all_arts'
        }

        const receivedArts = yield Api.postAPI(params);
        
        yield put({ type: FETCH_SUCCEEDED, receivedArts: receivedArts });
    } catch (error) {
        console.log(error)
        yield put({ type: FETCH_FAILED, error });
    }

    console.log("fetch");
}

export function* watchFetchArt() {
    yield takeLatest(FETCH_ARTS, fetchArt);
}