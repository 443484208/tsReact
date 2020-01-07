import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ss extends Component {
	constructor(props) {
		super(props);
		// 　在js中，类在 new 实例化的时候，系统会默认调用constructor函数，在 Child类中，
		//   我们没有定义构造函数，那个系统会默认有一个constructor，并且会在里面调用super(); 
		//   当我们定义了构造函数之后，就使用我们定义的。所以我们自己定义的构造函数必须要调用super()对父类进行初始化。
		//   在react中，如果不需要在 constructor里面使用 props，是可以不用写 constructor的
		this.state = {
			value: ' 点击跳转到路由参数search，state使用',
		};
	}
	componentDidMount() {
		console.log('this=', window);
		// componentDidMount方法会在组件已经被渲染到 
		// DOM 中后运行，所以，最好在这里设置计时器：
		console.log(this.props.children)
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
					<Link to={{ pathname: '/404', query: { querys: 'sunny' }, search: '?name=homename', state: { mold: 'add' } }} className="home-link">
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
				<div>
					<Link to={{ pathname: '/hookState' }} className="home-link">
						跳转hookState例子
					</Link>
				</div>
				<div>
					<Link to={{ pathname: '/gscroll' }} className="home-link">
						跳转无限滚动例子
					</Link>
				</div>
			</div>
		);
	}
}

export default ss;
