import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import './order.css';

import iconLeft from '../assert/arrow-left.png';
import iconRight from '../assert/arrow-right.png';
import ico from '../assert/ico.png';
import icon from '../assert/icon.png';

class Order extends Component {
	render() {
		return (
			<div>
				<div class="order-header">
					<p><NavLink to="/"><img src={iconLeft} alt="" /></NavLink></p>
					<div className="title">订单管理</div>
					<p></p>
				</div>
				<div className="nav-group">
					<div className="nav-button"><NavLink to="/order" activeClassName="active">全部</NavLink></div>
					<div className="nav-button"><NavLink to="/user" activeClassName="active">待付款</NavLink></div>
					<div className="nav-button"><NavLink exact to="/" activeClassName="active">待发货</NavLink></div>
					<div className="nav-button"><NavLink to="/user" activeClassName="active">待收货</NavLink></div>
					<div className="nav-button"><NavLink to="/user" activeClassName="active">待评价</NavLink></div>
				</div>

				<div className="order">
					<div className="info">
						<div className="source"><img className="move-pos" src={ico} alt="" /></div>
						<div className="store-name"><span>充值中心</span><img className="move-pos" src={iconRight} alt="" /></div>
						<div className="status">充值成功</div>
					</div>
					<div className="stuff">
						<div className="commodity"><img src={icon} alt="" /></div>
						<div className="stuff-info">
							<p>话费充值 - 湖南移动</p>
							<p className="into">充值号码：185xxxx1234 充值面额：100元</p>
						</div>
						<div className="money">
							<p>￥100.00</p>
							<p className="into">x1</p>
						</div>
					</div>
					<div className="total">
						<div className="f-module"></div>
						<div className="module">共1件商品</div>
						<div className="module">合计：￥100.00</div>
						<div className="module">（含运费￥0.00）</div>
					</div>
					<div className="btn-group clear">
						<div className="btn-pos">
							<NavLink to="/user">更多</NavLink>
							<NavLink to="/user">评价</NavLink>
							<NavLink to="/user">查询余额</NavLink>
							<NavLink to="/user">再次充值</NavLink>
						</div>
					</div>
				</div>
				<div className="order">
					<div className="info">
						<div className="source"><img className="move-pos" src={ico} alt="" /></div>
						<div className="store-name"><span>充值中心</span><img className="move-pos" src={iconRight} alt="" /></div>
						<div className="status">充值成功</div>
					</div>
					<div className="stuff">
						<div className="commodity"><img src={icon} alt="" /></div>
						<div className="stuff-info">
							<p>话费充值 - 湖南移动</p>
							<p className="into">充值号码：185xxxx1234 充值面额：100元</p>
						</div>
						<div className="money">
							<p>￥100.00</p>
							<p className="into">x1</p>
						</div>
					</div>
					<div className="total">
						<div className="f-module"></div>
						<div className="module">共1件商品</div>
						<div className="module">合计：￥100.00</div>
						<div className="module">（含运费￥0.00）</div>
					</div>
					<div className="btn-group clear">
						<div className="btn-pos">
							<NavLink to="/user">更多</NavLink>
							<NavLink to="/user">评价</NavLink>
							<NavLink to="/user">查询余额</NavLink>
							<NavLink to="/user">再次充值</NavLink>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Order;