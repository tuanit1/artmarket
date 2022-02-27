import {
    FETCH_ARTS,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from "../actions/actionTypes";

import { PostAPI } from '../api/Api';

appState = {
    arts: [],
}

const artReducers = (state = appState, action) => {
    switch (action.type) {

        case FETCH_SUCCEEDED:
            console.log("success");
            return { arts: action.receivedArts }
        case FETCH_FAILED:
            console.log("fail");
            break;
    }

    return state;
}

export default artReducers;