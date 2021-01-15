import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.scss';
import {Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import RestoServiceContext from './components/resto-service-context';
import RestoService from './services/resto-service';

import store from './redux/store';

import App from './components/app';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

