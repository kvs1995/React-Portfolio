import './navheader.css';
import {  SmileOutlined, ProfileOutlined, CodeOutlined, PhoneOutlined, LineOutlined, MenuOutlined, MoreOutlined , LeftOutlined} from '@ant-design/icons';
import { Layout, Menu, Icon } from 'antd';
import { useState } from 'react';
// import Home from '../home/Home'
// import AboutMe from '../aboutme/AboutMe';
// import Portfolio from '../portfolio/Portfolio';
// import ContactMe from '../contactme/ContactMe';
const { Header, Sider } = Layout;

export default function NavHeader() {
  const [clicked, setClicked]= useState('home')

  return(
    <>
      <Header className="site-layout-background custom-header" style={{padding: 0}}>
        {/* <MenuOutlined className="custom-menu-icon" onClick={() => { collapsed ? setCollapsed(false): setCollapsed(true)}}/> */}
        <Menu onClick={(e) => {setClicked(e.key); console.log('click', e.key)}} selectedKeys={[clicked]} mode="horizontal">
          <Menu.Item key="home">
            Home
          </Menu.Item>
          <Menu.Item key="about-me">
            About Me
          </Menu.Item>
          <Menu.Item key="portfolio">
            Portfolio
          </Menu.Item>
          <Menu.Item key="contact-me">
            Contact Me
          </Menu.Item>
        </Menu>
      </Header>
    </>
  )
}