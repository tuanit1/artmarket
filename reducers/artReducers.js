import {
    FETCH_ARTS,
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    SORT_ARTS,
} from "../actions/actionTypes";

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
        case SORT_ARTS:
            console.log(action.sortType);
            switch (action.sortType) {
                case 1:
                    return { arts: state.arts.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)) }
                case 2:
                    return { arts: state.arts.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)) }
                case 3:
                    return { arts: state.arts.sort((a, b) => CompareByTime(a, b)) }
            }
            break;
    }

    return state;
}

CompareByTime = (a, b) => {

    var t1 = new Date(a.time);
    var t2 = new Date(b.time);

    if (t1 > t2) {
        return -1;
    }
    if (t1 < t2) {
        return 1;
    }
    return 0;
}

export default artReducers;