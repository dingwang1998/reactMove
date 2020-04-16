import React from 'react';

class Hello extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        msg:"这是hello组件的私有数据"
      }
    };
    render(){
      return(
        <div>
          <h1>这是class创建的组件</h1>
          <p>{this.state.msg}</p>
          <input type="text" onClick = {this.changeMsg}/>
          <div>---------------------------------------</div>
        </div>
      )
    };
    changeMsg = ()=>{
      console.log(this);
      // this.state.msg = 123;
      // 异步执行的  只读
      this.setState({
        msg:'123'
      })
    };
};
export default Hello

