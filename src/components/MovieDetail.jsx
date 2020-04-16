import React from  'react'
import { Button,Spin,Alert} from 'antd'
import fetchJSONP from 'fetch-jsonp'

export default class MovieDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:{},
            isloading:true
        }
    }
    componentWillMount(){
        // `http://api.douban.com/v2/movie/subject/${event.movieid}?apikey=0df993c66c0c636e29ecbb5344252a4a`
        fetchJSONP(`http://api.douban.com/v2/movie/subject/${this.props.match.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                info:data,
                isloading:false
            })
        })
    }
    render(){
        //  console.log(this.info);

        
        return(
            <div>
                <Button type="primary" onClick = {this.comeblck.bind(this)}>
                     &lt; 返回电影列表页面
                </Button>
                {this.renderInfo()}
            </div>
        )
    }
    comeblck(){
        this.props.history.go(-1)
    }
    renderInfo = ()=>{
        // console.log(this.state.info)
        if(this.state.isloading){
            return(
                <Spin tip="Loading..." style={{width:'100% !improtant'}}>
                    <Alert
                    message="正在请求电影列表"
                    description="精彩内容，马上呈现."
                    type="info"
                    />
                </Spin>
            )
        }
        else{
            return(
                <div style={{textAlign:'center'}}>
                    <h1>{this.state.info.title}</h1>
                    <img src={this.state.info.images.large} alt="" style={{marginBottom:'10px'}}/>
                    <p>{this.state.info.summary}</p>
                </div>
            )
        }
    }
}