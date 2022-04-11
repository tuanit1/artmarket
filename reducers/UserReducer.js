import {
    FETCH_USER_SUCCEEDED,
    FETCH_USER_FAILED,
    UPDATE_ART_SUCCESSED,
    UPDATE_ART_FAILED,
    ADD_ART_SUCCESSED,
    ADD_ART_FAILED,
    UPDATE_USER_SUCCESSED,
    UPDATE_USER_FAILED,
    UPDATE_IMAGE_SUCCESSED,
    UPDATE_IMAGE_FAILED,
} from "../actions/actionTypes";

appState = {
    user: {
        uid: '',
        name: '',
        phone: '',
        image: ''
    },

    arts: []
}

const userReducers = (state = appState, action) => {

    switch (action.type) {
        case FETCH_USER_SUCCEEDED:
            return {
                user: action.userReceived ? action.userReceived : {
                    uid: '',
                    name: '',
                    phone: '',
                    image: ''
                },
                arts: action.arts ? action.arts : []
            };
        case FETCH_USER_FAILED:
            return {
                user: {
                    uid: '',
                    name: '',
                    phone: '',
                    image: ''
                },
                arts: []
            };

        case UPDATE_ART_SUCCESSED:
            alert("Cập nhập thành công!");
            return {
                ...state,
                arts: state.arts.map(art =>
                    (art.id == action.updatedArt.id)
                        ? {
                            ...art,
                            name: action.updatedArt.name,
                            thumb: action.updatedArt.thumb,
                            price: action.updatedArt.price,
                            author: action.updatedArt.author,
                            desc: action.updatedArt.desc
                        }
                        : art
                )
            }
        
        case ADD_ART_SUCCESSED:
            alert("Thêm thành công!");
            return {
                ...state,
                arts: [ ...state.arts, action.insertedArt]
            };
        case UPDATE_ART_FAILED:
            return state;
        case ADD_ART_FAILED:
            return state;
        case UPDATE_USER_SUCCESSED:
            alert("Cập nhập thành công!");
            return {
                ...state,
                user: {
                    ...state.user,
                    uid: action.updatedUser.uid,
                    name: action.updatedUser.name,
                    phone: action.updatedUser.phone,
                }
            };
        case UPDATE_USER_FAILED:
            return state;

        case UPDATE_IMAGE_SUCCESSED:

            alert("Cập nhập ảnh thành công");

            return {
                ...state,
                user: {
                    ...state.user,
                    image: action.returnImage
                }
            }

        case UPDATE_IMAGE_FAILED:
            alert("Cập nhập ảnh thất bại");
            break;

    }

    return state;
}

export default userReducers;