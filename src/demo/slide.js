import React, { Component } from 'react';
class scroll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: [1, 2, 3, 5, 4]
		};
		// 这里必须声明 textInput，这样 ref 才可以引用它
		this.textInput = React.createRef();
		// 为了在回调中使用 `this`，这个绑定是必不可少的
		// this.handleClick = this.handleClick.bind(this);就可以handleClick(){}
		//否则就是handleClick = () => {}
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		// 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
	}
	componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll);
		this.box = this.textInput;
		console.log(this.box);
		// 监听这个dom的scroll事件
		this.box.current.addEventListener('scroll', this.handleScroll);
	}
	handleScroll = (event) => {
		//滚动条高度
		let clientHeight = event.target.clientHeight; //可视区域高度
		let scrollTop = event.target.scrollTop;  //滚动条滚动高度
		let scrollHeight = event.target.scrollHeight; //滚动内容高度
		// 100px相差内
		if ((scrollTop + clientHeight) >= (scrollHeight - 100)) {
			console.log("滚动条滚动高度=", scrollTop);
			console.log("滚动内容高度=", scrollHeight);
			console.log("可视区域高度=", clientHeight);
			console.log("到达底部");
		} else {
			console.log('scrollTop=', scrollTop);
		}
	}
	render() {
		// 函数列表
		function NumberList(props) {
			const numbers = props.numbers;
			const listItems = numbers.map((number, index) =>
				<div className={`slide-div ${index === 2 ? 'sss' : ''}`} key={index}>{number}+{index}</div>
			);
			return (
				<div>{listItems}</div>
			);
		};

		return (
			<div id="slide_div" ref={this.textInput}>
				<NumberList numbers={this.state.arr} />
			</div>
		);
	}
}
export default scroll;