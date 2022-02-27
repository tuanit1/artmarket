import { combineReducers } from 'redux';
import artReducers from './artReducers';

const allReducers = combineReducers({
    art: artReducers,
});

export default allReducers;