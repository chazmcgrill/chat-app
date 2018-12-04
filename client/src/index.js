import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Chat from './components/Chat';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/chat" component={Chat} />
        </App>
    </BrowserRouter>, 
    document.getElementById('root')
);