import React, { Component } from 'react';
// 引用组件
// 调用组件方法this.refs.ExhibitionText.fn()
import Son from './son';
class father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sonValue: '',
            message:'父亲传过来的啦啦啦啦'
        };
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);就可以handleClick(){}
        //否则就是handleClick = () => {}
        this.sonChange = this.sonChange.bind(this);
        this.sonClick = this.sonClick.bind(this);
        this.fatherClick=this.fatherClick.bind(this);
        this.messageChange=this.messageChange.bind(this);
    }
    componentDidMount() {
        // componentDidMount方法会在组件已经被渲染到 
        // DOM 中后运行，所以，最好在这里设置计时器：
    }
    componentWillUnmount() {
        // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    }
    sonChange(event) {
        console.log(event.target.value)
        this.setState({
            sonValue: event.target.value
        })
        this.refs.Son.setState({
            sonValue: event.target.value
        })
    }
    sonClick(){
        this.refs.Son.sonClick()
    }
    fatherClick(){
        alert('父方法！')

    }
    messageChange(event){
        this.setState({
            message:event.target.value
        })
    }
    render() {
        return (
            <div id="home-container">
                <h1>父</h1>
                <input type="text" value={this.state.sonValue} onChange={this.sonChange} />
                <input type="text" value={this.state.message} onChange={this.messageChange} />
                <p onClick={this.sonClick}>点击使用子方法</p>
                <Son ref='Son' msg={this.state.message} fatherClick={this.fatherClick} />
            </div>
        );
    }
}

export default father;
