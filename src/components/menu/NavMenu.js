import './navmenu.css';
//update the MehOutlined
import { useState } from 'react';
import {  SmileOutlined, ProfileOutlined, CodeOutlined, PhoneOutlined, LineOutlined, MenuOutlined, MoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

export default function NavMenu() {

  const [collapsed, setCollapsed] = useState(false)

  return(
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="light" model="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<SmileOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<ProfileOutlined />}>
            About Me
          </Menu.Item>
          <Menu.Item key="3" icon={<CodeOutlined />}> 
            Portfolio
          </Menu.Item>
          <Menu.Item key="4" icon={<PhoneOutlined />}>
            Contact Me
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}