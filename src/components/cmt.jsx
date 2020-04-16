import React from 'react'

export default class CMTList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {user:'zhangshan',content:'123'},
                {user:'ls',content:'123'},
                {user:'xiaohong',content:'123'},
            ]
        }
        this.ipt = React.createRef();
        this.text = React.createRef();
    }
    render(){
        return(
            <div>
                <h1>这是评论列表组件</h1>
                {this.state.list.map((item,i)=>{
                    return(
                        <div key={i}>
                            <h3>评论人:{item.user}</h3>
                            <h5>评论类容:{item.content}</h5>
                        </div>
                    )
                })}
                <h5 style={{color:'red'}}>评论人:</h5>
                <input type="text" ref={this.ipt}/>
                <h5 style={{color:'red'}}>评论内容:</h5>
                <textarea cols="30" rows="10" ref = {this.text}></textarea>
                <br/>
                <button onClick = {this.postList}>发表</button>
            </div>
        )
    }
    postList = ()=>{
        var cmtlist  = {user:this.ipt.current.value,content:this.text.current.value}
        // 本地存储是对象格式的，转为数组格式
        var list = JSON.parse(localStorage.getItem('cmts')||'[]')
        list.unshift(cmtlist)
        localStorage.setItem('cmts',JSON.stringify(list))
        this.load()
    }
    load = ()=>{
        var list  = JSON.parse(localStorage.getItem('cmts')||'[]')
        this.setState({
            list:list
        })
    }
}