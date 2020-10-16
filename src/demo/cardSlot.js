import React from 'react'
import cardSlot from './../componets/cardSlot'

export default function () {
  return (
    <div>
      <cardSlot  renderTitle={
        () => {
          return <span>我是自定义的标题</span>
        }
      }>
        <div>我将被放在card组件的body区域内容</div>
      </cardSlot>
    </div>
  );
}
