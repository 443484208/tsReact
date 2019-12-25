import React, { Component } from 'react';
class show extends Component {
	constructor(props) {
		super(props);
		this.state = {
			divShow: true,
			listShow: true,
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
	listChange(e, data) {
		this.setState({ listShow: !data });
	}
	divChange(e, data) {
		this.setState({ divShow: !data });
	}
	renderList() {
		const listShow = this.state.listShow;
		if (listShow) {
			return <div className="show-div-red" onClick={(e) => this.listChange(e, this.state.listShow)}>{this.state.listShow}</div>;
		} else {
			return <div className="show-div-bule" onClick={(e) => this.listChange(e, this.state.listShow)}>{this.state.listShow}</div>;
		}
	}
	render() {
		const divShow = this.state.divShow;
		let div;
		if (divShow) {
			div = <div className="show-div-bule" onClick={(e) => this.divChange(e, this.state.divShow)} >{this.state.divShow}</div>;
		} else {
			div = <div className="show-div-red" onClick={(e) => this.divChange(e, this.state.divShow)} >{this.state.divShow}</div>;
		}

		return (
			<div id="home-container">
				{this.renderList()}
				{div}
			</div>
		);
	}
}

export default show;
