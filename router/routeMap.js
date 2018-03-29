import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import App from './index/App';
import User from './user/user';
import Order from './allorder/order';

const NavMap = () =>(
	<Router>
	    <div>
	        <Route exact path="/" component={App} />
	        <Route  path="/user" component={User} />
	        <Route  path="/order" component={Order} />
	    </div>
	</Router>
)
   
export default NavMap;