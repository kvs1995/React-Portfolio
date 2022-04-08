import './navheader.css';
import {  SmileOutlined, ProfileOutlined, CodeOutlined, PhoneOutlined, LineOutlined, MenuOutlined, MoreOutlined , LeftOutlined} from '@ant-design/icons';
import { Layout, Menu, Icon } from 'antd';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default function NavHeader({ clicked, setClicked }) {

  return(
    <>
      <Header className="site-layout-background custom-header" style={{padding: 0}}>
        <Menu onClick={(e) => {setClicked(e.key); console.log('click', e.key)}} selectedKeys={[clicked]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="bio">
          <Link to="/bio">About Me</Link>
          </Menu.Item>
          <Menu.Item key="portfolio">
           <Link to="/portfolio">Portfolio</Link>
          </Menu.Item>
          <Menu.Item key="contact-me" >
           <Link to="/contact">Contact Me</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

