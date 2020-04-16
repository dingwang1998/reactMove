import React from 'react'
import PropsTypes from 'prop-types';

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:props.initcount
        }
    }
    // 在react中使用静态的defaultProps属性，来设置组件的默认值
    static defaultProps = {
        initcount:0
    }
    // 在组件即将要挂载到页面上的时候执行，此时，组件尚未挂载到页面中
    componentWillMount(){
        // console.log(document.querySelector("#myh3"))
        console.log(this.props.initcount);
        
    }

    render(){
        // 在return之前，虚拟dom还没有创建，根本拿不到元素
        // 在之前调用render生命周期函数还是旧的数据
        return(
            <div>
                <h1 style = {{margin:'0',padding:'0'}}>Counter计数器</h1>
                <button id="btn" onClick = {this.increment}>+1</button>
                <h3 id="myh3" ref="h3">当前的数量是:{this.state.count}</h3>
            </div>
        )
        // 当return执行完毕后，虚拟dom创建好了，还没挂载到页面上
    }
    increment = ()=>{
        this.setState({
            // 不能实现自加
            count:this.state.count + 1
        }) 
    }
    // 挂载dom到页面当中 相当于mounted函数
    componentDidMount(){
        // console.log(document.getElementById("myh3"));
        // document.getElementById("btn").onclick = ()=>{
            
        //     this.setState({
        //         // 不能实现自加
        //         count:this.state.count + 1
        //     }) 
        // }
    }
    // 要求必须返回一个布尔值
    // 如果烦恼会flase，则不会继续执行生命周期函数，不会刷新state
    shouldComponentUpdate(nextProps,nextState){
        // return nextState.count % 2 ===0? true:false 
        return true
    }
    // 组件将要更新，此时尚未更新，在进入这个生命周期函数的时候，拿到的上一次的数据
    componentWillUpdate(){
        // console.log(document.getElementById("myh3").innerHTML);
        // console.log(this.refs.h3.innerHTML); 
    }
    // 组件完成更新，此时state中的数据，虚拟dom，页面上的dom，都是新的
    componentDidUpdate(){
        console.log(this.refs.h3.innerHTML); 
        
    }
}

// 在这个创建一个 静态的propTypes对象，在这个对象中，可以把外界传递过来的属性
Counter.propsTypes = {
    initcount:PropsTypes.string
} 

