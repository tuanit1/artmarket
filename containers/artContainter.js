import { connect } from 'react-redux';
import ArtComponent from '../components/ArtComponent';

import { fetchArtAction } from '../actions';

const mapStateToProps = (state) => {        

    return {        
        data: state.art
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchArt: () => {
            dispatch(fetchArtAction());
        }
    }
}
const ArtContainer = connect(mapStateToProps, mapDispatchToProps)(ArtComponent);
export default ArtContainer;