import { combineReducers } from 'redux';
import ArtReducers from './ArtReducers';
import UserReducer from './UserReducer';

const allReducers = combineReducers({
    art: ArtReducers,
    user: UserReducer
});

export default allReducers;