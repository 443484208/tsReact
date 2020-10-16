import React from 'react'

export interface CardProps {
  title?: string,
  // 加入了一个renderTitle属性，属性类型是Function
  renderTitle?: Function,
  children: React.ReactNode
}

export default function(props: CardProps) {

  const {title, renderTitle} = props
  // 如果指定了renderTtile，则使用renderTitle,否则使用默认的title
  let titleEl = renderTitle ? renderTitle() : <span>{title}</span>

  return (
    <div className="card">
      <div className="card__title">{titleEl}</div>
      <div className="card__body">
        {/**每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容 */}
        {props.children}
      </div>
    </div>
  );
}
