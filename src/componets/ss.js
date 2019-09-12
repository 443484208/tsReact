
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ss extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ' 点击跳转到路由参数search，state使用',
		};
	}
	componentWillMount() {
		// 组件初始化时只调用，以后组件更新不调用，
		// 整个生命周期只调用一次，此时可以修改state。
	}
	componentDidMount() {
		//    componentDidMount方法会在组件已经被渲染到 
		// DOM 中后运行，所以，最好在这里设置计时器：
		console.log(this.props)
	}
	componentWillUnmount() {
		// 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
		console.log('李卡卡')
	}
	render() {
		return (
			<div id="home-container">
				{/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
				<div>
					<Link to={{ pathname: '/404', search: '?name=homename', state: { mold: 'add' } }} className="home-link">
						{this.state.value}
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/click' }} className="home-link">
						跳转点击事件例子
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/show' }} className="home-link">
						跳转条件渲染例子
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/list' }} className="home-link">
						跳转列表渲染例子
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/form' }} className="home-link">
						跳转表单例子
					</Link>
				</div>
				
				<div>
					<Link to={{ pathname: '/father' }} className="home-link">
						跳转父子组件例子
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/scroll' }} className="home-link">
						跳转滑动例子
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/slide' }} className="home-link">
						跳转左右滑动例子
					</Link>
				</div>
			</div>
		);
	}
}

export default ss;
