import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './user.css';
import Nav from '../nav/nav';
import bannerPic from './user_banner.jpg';
import defaultPic from '../assert/default.jpg';
import iconAll from '../assert/icon1.png';
import iconBuy from '../assert/icon2.png';
import iconSearch from '../assert/icon3.png';
import iconPay from '../assert/icon4.png';
import iconWang from '../assert/icon5.png';
import iconRight from '../assert/arrow-right.png';


class User extends Component {
	render() {
		return (
			<div>
				<div class="user-module">
					<img class="banner" src={bannerPic} alt="banner图" />
					<div class="topnav">
						<div class="pic"><img src={defaultPic} alt="头像" /></div>
						<div class="navBar">
							<div class="childDiv"><p>0</p><p>收藏的宝贝</p></div>
							<div class="childDiv"><p>0</p><p>收藏的店铺</p></div>
							<div class="childDiv"><p>0</p><p>我的足迹</p></div>
						</div>
					</div>
					<Nav/>
					<NavLink to="/">
						<div class="allOrder">
							<div class="icon-all"><img src={iconAll} alt="" /></div>
							<p class="btn-desc">全部订单</p>
							<p class="open-all">查看全部订单</p>
							<div class="btn-more"><img src={iconRight} alt="" /></div>
						</div>
					</NavLink>
					<div class="othermenus">
						<NavLink to="/">
							<div class="other-menu">
								<div class="icon"><img src={iconBuy} alt="" /></div>
								<p class="btn-desc">购物车</p>
								<div class="btn-more"><img src={iconRight} alt="" /></div>
							</div>
						</NavLink>
						<NavLink to="/">
							<div class="other-menu">
								<div class="icon"><img src={iconSearch} alt="" /></div>
								<p class="btn-desc">搜索</p>
								<div class="btn-more"><img src={iconRight} alt="" /></div>
							</div>
						</NavLink>
						<NavLink to="/">
							<div class="other-menu">
								<div class="icon"><img src={iconPay} alt="" /></div>
								<p class="btn-desc">支付宝</p>
								<div class="btn-more"><img src={iconRight} alt="" /></div>
							</div>
						</NavLink>
						<NavLink to="/">
							<div class="other-menu">
								<div class="icon"><img src={iconWang} alt="" /></div>
								<p class="btn-desc">旺旺</p>
								<div class="btn-more"><img src={iconRight} alt="" /></div>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		)
	}
}

export default User;