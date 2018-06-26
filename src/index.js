import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArtistContainer from './component/ArtistContainer';

import {Provider} from 'react-redux';
import {configureStore} from './store'; /* eslint-disable */

const store = configureStore();
//debugger;
ReactDOM.render(
    <Provider store={store}>
        <ArtistContainer />
    </Provider>,
    document.getElementById('root'));


