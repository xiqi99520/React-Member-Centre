import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
 
import unpay from '../assert/unpay.png';
import undelivery from '../assert/undelivery.png';
import unevaluation from '../assert/unevaluation.png';
import unreceipt from '../assert/unreceipt.png';
import unship from '../assert/unship.png';

const NavBar = () =>(
<div>
    <div className="common-nav">
        <NavLink exact to='/' className="unpay"><img src={unpay} alt="" /><p>待付款</p></NavLink>
        <NavLink to='/user' activeClassName='active'><img src={unship} alt="" /><p>待发货</p></NavLink>
        <NavLink to='/user' activeClassName='active'><img src={undelivery} alt="" /><p>待收货</p></NavLink>
        <NavLink to='/user' activeClassName='active'><img src={unevaluation} alt="" /><p>待评价</p></NavLink>
        <NavLink to='/user' activeClassName='active'><img src={unreceipt} alt="" /><p>退款/售后</p></NavLink>
    </div>
</div>
)
   
export default NavBar;