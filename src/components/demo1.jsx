import React from 'react'
import '../css/demo1.css'

const BoxStyle = {border:'1px solid #ccc',margin:'10px 0',paddingLeft:'15px '}

function CommentItem (props,i){
    return(
        <div key={i} style={BoxStyle}>
            <h1>{props.user}</h1>
            <h3>{props.content}</h3>
        </div>
    )
}



class CommentList extends React.Component{
    constructor(props){
        super(props)

        this.state={
            cmts:[
                {user:'张山', content:'沙发'},
                {user:'张山', content:'沙发'},
                {user:'张山', content:'沙发'},
                {user:'张山', content:'沙发'},
            ]
        }
    }
    render(){
        return(
            <div>
                <h1 className="content">标题</h1>
                {this.state.cmts.map((item,i)=>{
                    return(
                        <CommentItem {...item} key={i}></CommentItem>
                    )
                })}
            </div>
        )

    }
}

export default CommentList;