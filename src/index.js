import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './index/App';
import User from './user/user';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route  path="/user" component={User} />
        </div>
    </Router>,
    document.getElementById("root")
);

registerServiceWorker();