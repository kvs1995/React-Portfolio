import logo from './logo.svg';
import './App.css';
import NavMenu from './components/menu/NavMenu'
import NavHeader from './components/navheader/NavHeader'
import MainContent from './components/maincontent/MainContent';
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { useState } from 'react'; 
const { Header, Sider, Content } = Layout;

export default function App() {

  const [collapsed, setCollapsed] = useState(true)
  // const [visible, setVisible] =

  return (
    <Layout className="nav-menu-container" >
        <NavMenu collapsed={collapsed} setCollapsed={setCollapsed} visible={!collapsed} /> 
        {/* <NavMenu /> */}
      <Layout className="site-layout">
      <NavHeader/>

        <MainContent />
      </Layout>
    </Layout>
  );
}

