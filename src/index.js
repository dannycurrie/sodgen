import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import SoundEngine from './SoundEngine';

const store = configureStore();
const engine = SoundEngine(store);
engine.init();

ReactDOM.render(
    <Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

