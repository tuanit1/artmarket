import { connect } from 'react-redux';
import MyProfileComponent from '../components/MyProfileComponent';
import React, { Component } from 'react';
import { fetchUserAction, updateArt, addArt, updateUser, updateImage } from '../actions';

class MyProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyProfileComponent {...this.props} />
        );
    }
}

export default connect(
    state => {
        return {
            user: state.user.user,
            arts: state.user.arts
        }
    },
    dispatch => {
        return {
            onFetchUser: (uid) => {
                dispatch(fetchUserAction(uid));
            },

            onUpdateUser: (user) => {
                dispatch(updateUser(user));
            },

            onUpdateArt: (param) => {
                dispatch(updateArt(param));
            },

            onAddArt: (param) => {
                dispatch(addArt(param));
            },

            onUpdateImage: (image, uid) => {
                dispatch(updateImage(image, uid));
            }
        }
    }

)(MyProfileContainer);
