import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './index/App';
import User from './user/user';
import Order from './allorder/order';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route  path="/user" component={User} />
            <Route  path="/order" component={Order} />
        </div>
    </Router>,
    document.getElementById("root")
);

registerServiceWorker();