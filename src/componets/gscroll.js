import React, { useState } from "react";

import Ss from './ss';
function infitityScroll() {
    // 模拟100条数据 
    var count = 0;
    var list = Array.from({ length: 100 }, () => {
        return count++;
    });
    var liHeight = 50, // 单个li高度 
        liMarginTop = 10, // li的marginTop 
        viewHeight = 400, // 视口高度 
        viewWidth = 200, // 视口宽度 
        showLiCount = parseInt((viewHeight / (liHeight + liMarginTop)),10) + 1; // 视口内盛放的li个数 
    const [nowList, setNowList] = useState(list.slice(0, showLiCount));
    const [ulTop, setUlTop] = useState(0); // 内部第二个ul距离容器的距离 
    const [ulHeight] = useState(
        // 计算所有li的总的高度 
        list.length * liHeight + (list.length + 1) * liMarginTop
    );
    const [bodyHeight, setBodyHeight] = useState(0);
    const ulContainer = React.createRef();
    // 监听这个dom的scroll事件
    const gScroll = () => {
        var nowTop = ulContainer.current.scrollTop;
        console.log(nowTop > bodyHeight ? '向下' : '向上')
        setUlTop(nowTop - (nowTop % (liHeight + liMarginTop)));
        var start = parseInt((nowTop / (liHeight + liMarginTop)),10);
        setNowList(list.slice(start, start + showLiCount));
        if (ulHeight < (nowTop + viewHeight + liHeight)) {
            console.log('即将到底部')
        } else if (viewHeight >= nowTop + viewHeight) {
            console.log('到达顶部')
            console.log(nowTop)
        }
        setBodyHeight(nowTop);

    };
    const g = (e) => {
        console.log(e);
    }

    return (
        <div>
            <Ss />
            <div
                style={{
                    height: viewHeight + "px",
                    width: viewWidth + "px",
                    border: "1px solid",
                    position: "relative",
                    overflow: "auto"
                }}
                ref={ulContainer}
                onScroll={gScroll}
            >
                <ul style={{ margin: 0, padding: 0, height: ulHeight + "px" }}></ul>
                <ul
                    style={{
                        margin: 0,
                        position: "absolute",
                        listStyleType: "none",
                        top: ulTop + "px",
                        width: "100%",
                        boxSizing: "border-box",
                        padding: 0
                    }}
                >
                    {nowList.map((item, index) => {
                        return (
                            <li onClick={() => {
                                g(item);
                            }}
                                key={index}
                                style={{
                                    backgroundColor: "yellow",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    height: liHeight + "px",
                                    marginTop: liMarginTop + "px"
                                }}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>

    );
}

export default infitityScroll;