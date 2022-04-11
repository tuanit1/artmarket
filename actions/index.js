import {
    FETCH_ARTS,
    SEARCH_ARTS,
    SORT_ARTS, 
    FETCH_USER,
    UPDATE_ART,
    ADD_ART,
    UPDATE_USER,
    UPDATE_IMAGE
} from "./actionTypes";

export const fetchArtAction = () => {
    return {
        type: FETCH_ARTS
    }
}

export const searchAction = (text) => {
    return {
        type: SEARCH_ARTS,
        search: text
    }
}

export const sortAction = (sort) => {
    return {
        type: SORT_ARTS,
        sortType: sort
    }
}

export const fetchUserAction = (id) => {
    return {
        type: FETCH_USER,
        uid: id
    }
}

export const updateArt = (param) => {
    return {
        type: UPDATE_ART,
        param: param
    }
}

export const addArt = (param) => {
    return {
        type: ADD_ART,
        param: param
    }
}

export const updateUser = (user) => {
    return { 
        type: UPDATE_USER,
        user: user
    }
}

export const updateImage = (image, uid) => {
    return {
        type: UPDATE_IMAGE,
        image: image,
        uid: uid
    }
}

