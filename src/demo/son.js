import React, { Component } from 'react';
class son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sonValue: ''
        };
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);就可以handleClick(){}
        //否则就是handleClick = () => {}
        this.sonClick = this.sonClick.bind(this);
    }
    componentDidMount() {
        // componentDidMount方法会在组件已经被渲染到 
        // DOM 中后运行，所以，最好在这里设置计时器：
    }
    componentWillUnmount() {
        // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    }
    sonClick() {
        alert('子方法！')
    }

    render() {
        return (
            <div id="home-container">
                <h1>这是子组件</h1>
                <p>接受父固定值值{this.props.msg}</p>
                <p>接受父传值：{this.state.sonValue}</p>
                <p onClick={this.props.fatherClick}>点击调用父方法</p>
            </div>
        );
    }
}

export default son;
