import { createStore } from 'redux';
import createReducer from './reducers';

export default () => createStore(createReducer());
