import React from 'react'
// 路由应该在所有业务之前
import {Link, Route,Switch} from'react-router-dom'

import MovieList from './movielist.jsx'
import MovieDetail from './MovieDetail.jsx'

import { Layout, Menu } from 'antd';

const {Content,Sider } = Layout;


export default class Movie extends React.Component{
    render(){
        return(
            <Layout className="site-layout-background" style={{ padding: '0' ,height:'100%'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/movie/in_theaters/1">正在热映</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/movie/coming_soon/1">即将上映</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/movie/top25/1">top25</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '10PX 10px', minHeight: 280, borderLeft:'1px solid #ccc'}}>
                        <Switch>
                            <Route path="/movie/detail/:id" component={MovieDetail}></Route>
                            <Route path="/movie/:type/:page" component={MovieList}></Route>
                        </Switch>
                    </Content>
            </Layout>
        )
    }
}