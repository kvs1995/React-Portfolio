import './navmenu.css';
//update the MehOutlined
import { useState } from 'react';
import {  SmileOutlined, ProfileOutlined, CodeOutlined, PhoneOutlined, LineOutlined, MenuOutlined, MoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import Home from '../home/Home'
import AboutMe from '../aboutme/AboutMe';
import Portfolio from '../portfolio/Portfolio';
import ContactMe from '../contactme/ContactMe';
const { Sider } = Layout;

export default function NavMenu({ collapsed, setCollapsed }) {

  return(
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="logo" />
        <Menu className="nav-bar-icons" theme="light" model="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<MenuOutlined onClick={() => { collapsed ? setCollapsed(false): setCollapsed(true)}}/>}>

          </Menu.Item>
          <Menu.Item key="2" href={<Home />} icon={<SmileOutlined/>}>
            Home
          </Menu.Item>
          <Menu.Item key="3" href={<AboutMe />} icon={<ProfileOutlined />}>
            About Me
          </Menu.Item>
          <Menu.Item key="4" href={<Portfolio />} icon={<CodeOutlined />}> 
            Portfolio
          </Menu.Item>
          <Menu.Item key="5" href={<ContactMe />} icon={<PhoneOutlined />}>
            Contact Me
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}