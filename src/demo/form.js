
import React, { Component } from 'react';
class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            flavor: 'coconut'
        };
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);就可以handleClick(){}
        //否则就是handleClick = () => {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.flavorChange = this.flavorChange.bind(this);
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
    handleSubmit() {

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(event.target.value)
    }
    flavorChange(event) {
        this.setState({ flavor: event.target.value });
        console.log(event.target.value)
    }


    render() {
        return (
            <div id="home-container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        选择你喜欢的风味:
                        <select value={this.state.flavor} onChange={this.flavorChange}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">柠檬</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        );
    }
}

export default form;
