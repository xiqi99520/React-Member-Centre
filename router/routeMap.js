import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import App from './index/App';
import User from './user/user';

const NavMap = () =>(
	<Router>
	    <div>
	        <Route exact path="/" component={App} />
	        <Route  path="/user" component={User} />
	    </div>
	</Router>
)
   
export default NavMap;