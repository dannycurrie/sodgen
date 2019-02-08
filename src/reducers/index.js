import { combineReducers } from 'redux';
import sound from './sound';
import notes from './notes';

const createReducer = () => combineReducers({ sound, notes });

export default createReducer;
