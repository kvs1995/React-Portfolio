//CSS Imports
import './navheader.css';

//Icon Imports
import {  SmileOutlined, ProfileOutlined, CodeOutlined, PhoneOutlined, LineOutlined, MenuOutlined, MoreOutlined , LeftOutlined} from '@ant-design/icons';

//Necessary React and Antd Imports
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

//Variable Declaration
const { Header } = Layout;

export default function NavHeader({ clicked, setClicked }) {

  return(
    <Header className="site-layout-background custom-header" style={{padding: 0}}>
      <Menu className ="nav-menu" onClick={(e) => {setClicked(e.key); console.log('to the', e.key, 'section we go')}} selectedKeys={[clicked]} mode="horizontal">
        
        <Menu.Item key="home">
          <Link to="/">
            Home
          </Link>
        </Menu.Item>
        
        <Menu.Item key="bio">
          <Link to="/bio">
            About Me
          </Link>
        </Menu.Item>
        
        <Menu.Item key="portfolio">
          <Link to="/portfolio">
            Portfolio
          </Link>
        </Menu.Item>
        
        <Menu.Item key="contact-me" >
          <Link to="/contact">
            Contact Me
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

