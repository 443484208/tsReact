
import React, { Component } from 'react';
class list extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: [1, 2, 3, 4, 5, 6, 2, 5, 2, 2]
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
	arrEach(data) {

	}
	render() {
		// 函数列表
		function NumberList(props) {
			const numbers = props.numbers;
			const listItems = numbers.map((number, index) =>
				<li key={index}>{number}+{index}</li>
			);
			return (
				<ul>{listItems}</ul>
			);
		};
		// 定义数组，将元素放到该数组中
		var siteElements = [];
		this.state.arr.forEach((item, index) => {
			siteElements.push(
				<div key={index} >
					<p>数值：{item}</p>
					<p>key：{item}</p>
				</div>
			);
		});
		return (
			<div id="home-container">
				{siteElements}
				<NumberList numbers={this.state.arr} />
			</div>
		);
	}
}

export default list;
