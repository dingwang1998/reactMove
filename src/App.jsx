import React from 'react';
import './App.css';
import Home from './components/Home.jsx'
import Movie from  './components/Movie.jsx'
import About from './components/About.jsx'

import{
  HashRouter,
  Route,
  Link
}from'react-router-dom'

import { Layout, Menu } from 'antd';
// import { HashRouter } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


function App() {
  // console.log(window.location);
  return (
  <HashRouter>
    <div style={{height:'100%'}}>
      <Layout className="layout"  style={{height:'100%'}}>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
              <Menu.Item key="home">
                <Link to = "/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to = "/movie/in_theaters/1">电影</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to = "/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className="site-layout-content" style={{height:'100%'}} >
              <Route path="/home"><Home/></Route>
              <Route path="/movie"><Movie/></Route>
              <Route path="/about"><About/></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center',background:"#ccc" }}>Ant Design ©2020 Created by Ant UED</Footer>
      </Layout>
    </div>
  </HashRouter>
  );
}

export default App;
