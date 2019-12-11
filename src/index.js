import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers'
import WebPage from './components/WebPage'

const store = createStore(allReducers);

render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,
    document.getElementById('root')
);
