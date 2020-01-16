import React, { Component, useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react';

class Child extends Component {
	handleLog = () => {
		console.log('Child Component');
	}
	render() {
		const { countss } = this.props;
		return <h2>countss: {countss}</h2>
	}
}

function Example() {
	// useRef 获取DOM元素的节点
	// 获取子组件的实例
	// 渲染周期之间共享数据的存储	
	const refUse = useRef();
	// 声明一个叫 “count” 的 state 变量。
	const [count, setCount] = useState(1);
	const [napa, setNapa] = useState([{ name: '6' }, { name: '65' }]);
	const cb = useCallback(() => { setCount(count * count) });
	// 相当于 componentDidMount 和 componentDidUpdate:
	// useEffect 会在 DOM 渲染之后执行，所以我们可以利用这个特性，避免一些由于 DOM 渲染之后进行操作导致的白屏问题。
	// 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。
	// 给useEffect传递第二个参数[count]，这样只有count改变的时候才会执行,不然每次组件刷新都会跟着刷新
	// 组件挂载时只执行一次
	// useEffect(() => {
	//   console.log("只执行一次，类似componentDidMount")
	// },[]);
	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		document.title = `You clicked ${count} times`;
		setNapa([{ name: '9' }, { name: '65' }]);
		refUse.current.handleLog();
	}, [count]);
	// useLayoutEffect在dom之前执行
	// 给useLayoutEffect第二个参数[]实际上没啥效果
	useLayoutEffect(() => {
		document.title = `You clicked ${count} `;
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<p>{napa[0].name}</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
		</button>
			<button onClick={cb}>
				useCallback
		</button>
			<Child ref={refUse} countss={count} />
		</div>
	);
}



export default Example;