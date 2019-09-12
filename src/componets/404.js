
import React, { Component } from 'react';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: '找不到页面',
      };
   }
      // {/*this.props.location接受上一页传送的数据*/}
   render() {
      return (
         <div id="home-container">
            <p>{this.state.value}</p>
            <p>search:{this.props.location.search} </p>
            <p>state:{this.props.location.state.mold} </p>
            <div onClick={() => this.props.history.goBack()}>返回上一页</div>
         </div>
      );
   }
}

export default Home;
