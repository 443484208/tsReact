import React, { Component } from 'react';
class click extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ' 点击跳转到路由参数search，state使用',
		};
		// 为了在回调中使用 `this`，这个绑定是必不可少的
		// this.handleClick = this.handleClick.bind(this);就可以handleClick(){}
		//否则就是handleClick = () => {}
	}
	componentWillMount() {
		// 组件初始化时只调用，以后组件更新不调用，
		// 整个生命周期只调用一次，此时可以修改state。
	}
	componentDidMount() {
		// componentDidMount方法会在组件已经被渲染到 
		// DOM 中后运行，所以，最好在这里设置计时器：
	}
	componentWillUnmount() {
		// 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
	}
	handleClick = () => {
		console.log('this is:', this);
	 }
	deleteRow(id,e){
		console.log(id)
		console.log(e)
	}
	render() {
		return (
			<div id="home-container">
				<div className="click-div" onClick={this.handleClick}>点击</div>	
				<button onClick={this.deleteRow.bind(this, '方式1')}>传参点击1</button>
				<button onClick={(e) => this.deleteRow(e, '方式2')}>传参点击2</button>
			</div>
		);
	}
}

export default click;
