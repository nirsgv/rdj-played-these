import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

console.log(store);

const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="app-wrp">
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);