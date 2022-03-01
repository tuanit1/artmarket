import { connect } from 'react-redux';
import ArtComponent from '../components/ArtComponent';
import React, { Component } from 'react';
import { fetchArtAction } from '../actions';

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
            }
        }
    }

)(ArtContainer);





// const mapStateToProps = (state) => {

//     return {
//         data: state.art
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFetchArt: () => {
//             dispatch(fetchArtAction());
//         }
//     }
// }
// const ArtContainer = connect(mapStateToProps, mapDispatchToProps)(ArtComponent);
// export default ArtContainer;