import React from 'react'
import { Rate } from 'antd';

export default class MovieItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div onClick = {this.showbox} style={{border:'1px solid #ccc',width:'170px',margin:'6px',textAlign:'center',boxShadow:'0 0 6px #ccc'}}>
                <img src= {this.props.images.small} alt="" style={{width:'100%',height:'250px'}}/ >
                <h4>电影名称:{this.props.title}</h4>
                <h4>上映年份:{this.props.year }</h4>
                <h4>电影类型:{this.props.genres.join(',')}</h4>
                <Rate allowHalf defaultValue={this.props.rating.average/2}/>
            </div>
        )
    }
    showbox = ()=>{
        console.log(this.props.history);
        this.props.history.push('/movie/detail/'+this.props.id)
    }
}