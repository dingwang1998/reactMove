import React from 'react'
import { Spin, Alert } from 'antd';
import fetchJSONP from 'fetch-jsonp'
import MovieItem from './movieItem.jsx'
import { Pagination } from 'antd';

export default class MovieList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
            nowPage:parseInt(props.match.params.page)||1,
            pagSize:14,
            isloading:true,
            total:0,
            movieType:props.match.params.type
        }
    }
    componentWillMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         isloading:false
        //     })
        // },1000)
        this.creatMolistList()
    }
    render(){
        // console.log(this.props);
        
        return(
            <div>
                <div style={{display:'flex',display:'flex',flexWrap:'wrap',minWidth:'1049px'}}>
                    {this.renderList()}
                </div>
                <Pagination defaultCurrent={this.state.nowPage} defaultPageSize ={this.state.pagSize} total={this.state.total} onChange={this.pageChange}/>
            </div>
        )
    }
    creatMolistList(){
        const start  = this.state.pagSize * (this.state.nowPage - 1)
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pagSize}`
        fetchJSONP(url)
         .then(response=>response.json())
         .then(data=>{
            //  console.log(data);
            this.setState({
                isloading:false,
                movies:data.subjects    ,
                total:data.total
            })
         })

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            isloading:true,
            nowPage:parseInt(nextProps.match.params.page)||1,
            movieType:nextProps.match.params.type
        },function(){
            this.creatMolistList()
        })
    }
    
    renderList = ()=>{
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
                this.state.movies.map(item=>{
                    return (
                        <MovieItem {...item} key={item.id} history = {this.props.history}></MovieItem>
                    )
                })
            )
        }
    }
    pageChange = ()=>{
        // console.log(this.props);
        this.props.history.push('/movie/'+ this.state.movieType+ "/" +this.state.page)
    }

}