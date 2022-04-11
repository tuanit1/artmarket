import { connect } from 'react-redux';
import ArtComponent from '../components/ArtComponent';
import React, { Component } from 'react';
import { fetchArtAction, searchAction, sortAction } from '../actions';

class ArtContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ArtComponent {...this.props} />
        );
    }
}

export default connect(
    state => {
        return {
            data: state.art
        }
    },
    dispatch => {
        return {
            onFetchArt: () => {
                dispatch(fetchArtAction());
            },

            onSearch: (text) => {
                dispatch(searchAction(text));
            },

            onSort: (sortType) => {
                dispatch(sortAction(sortType));
            }
        }
    }

)(ArtContainer);
