import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Chat from './components/Chat';
import Signout from './components/Signout';
import './index.css';

const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/chat" component={Chat} />
                <Route path="/signout" component={Signout} />
            </App>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);