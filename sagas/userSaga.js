import {
    FETCH_USER,
    FETCH_USER_FAILED,
    FETCH_USER_SUCCEEDED,
    UPDATE_ART,
    UPDATE_ART_SUCCESSED,
    UPDATE_ART_FAILED,
    ADD_ART,
    ADD_ART_SUCCESSED,
    ADD_ART_FAILED,
    UPDATE_USER,
    UPDATE_USER_SUCCESSED,
    UPDATE_USER_FAILED,
    UPDATE_IMAGE,
    UPDATE_IMAGE_SUCCESSED,
    UPDATE_IMAGE_FAILED,
} from "../actions/actionTypes";
import { put, takeLatest } from 'redux-saga/effects';

import { Api } from './Api';

function* fetchUser(action) {
    try {

        let params = {
            method_name: 'method_get_user',
            uid: action.uid
        }

        const response = yield Api.postAPI(params);

        yield put({ type: FETCH_USER_SUCCEEDED, userReceived: response.user, arts: response.array_art });
    } catch (error) {
        console.log("hehe", error)
        yield put({ type: FETCH_USER_FAILED, error });
    }

    console.log("watch user_fetch");
}

function* updateArt(action) {
    try {

        let params = {
            method_name: 'method_update_art',
            id: action.param.id,
            name: action.param.name,
            thumb: action.param.thumb,
            price: action.param.price,
            author: action.param.author,
            desc: action.param.desc
        }

        const response = yield Api.postAPI(params);

        if (response.result == 'success') {
            yield put({ type: UPDATE_ART_SUCCESSED, updatedArt: action.param });
        } else {
            yield put({ type: UPDATE_ART_FAILED, error });
        }


    } catch (error) {
        console.log(error)
        yield put({ type: UPDATE_ART_FAILED, error });
    }

    console.log("watch update_art");
}

function* AddArt(action) {
    try {

        let params = {
            method_name: 'method_add_art',
            uid: action.param.uid,
            name: action.param.name,
            thumb: action.param.thumb,
            price: action.param.price,
            author: action.param.author,
            desc: action.param.desc
        }

        const response = yield Api.postAPI(params);

        if (response.result == 'success') {
            yield put({ type: ADD_ART_SUCCESSED, insertedArt: response.insertedArt });
        } else {
            yield put({ type: ADD_ART_FAILED, error });
        }


    } catch (error) {
        console.log(error)
        yield put({ type: ADD_ART_FAILED, error });
    }

    console.log("watch add_art");
}

function* updaterUser(action) {
    try {
        let params = {
            method_name: 'method_update_user',
            uid: action.user.uid,
            name: action.user.name,
            phone: action.user.phone,
        }

        const response = yield Api.postAPI(params);

        if (response.result == 'success') {
            yield put({ type: UPDATE_USER_SUCCESSED, updatedUser: response.updatedUser });
        } else {
            yield put({ type: UPDATE_USER_FAILED, updatedUser: response.error });
        }

    } catch (error) {
        console.log(error);
        yield put({ type: UPDATE_ART_FAILED, error });
    }
}

function* updaterImage(action) {

    try {
        let params = {
            method_name: 'method_update_image',
            image: action.image,
            uid: action.uid
        }

        const response = yield Api.postAPI(params);

        if (response.result == 'success') {
            console.log(response);
            yield put({ type: UPDATE_IMAGE_SUCCESSED, returnImage: response.image });
        } else {
            yield put({ type: UPDATE_IMAGE_FAILED, returnImage: '' });
        }
    } catch (error) {
        console.log("Error: "+ error);
        yield put({ type: UPDATE_IMAGE_FAILED, error });
    }

    console.log("watch update image");
}


export function* watchFetchUser() {
    yield takeLatest(FETCH_USER, fetchUser);
}

export function* watchUpdateArt() {
    yield takeLatest(UPDATE_ART, updateArt);
}

export function* watchArtUser() {
    yield takeLatest(ADD_ART, AddArt);
}

export function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER, updaterUser)
}

export function* watchUpdateImage() {
    yield takeLatest(UPDATE_IMAGE, updaterImage)
}

