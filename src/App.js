import logo from './logo.svg';
import './App.css';
import NavHeader from './components/navheader/NavHeader'
import MainContent from './components/maincontent/MainContent';
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { useState } from 'react'; 
const { Header, Sider, Content } = Layout;

export default function App() {
  const [clicked, setClicked]= useState('home')
  // const [collapsed, setCollapsed] = useState(true)
  // const [visible, setVisible] =

  return (


      <Layout className="site-layout">
        <NavHeader clicked={clicked} setClicked={setClicked}/>
        <Layout className="background">
          <MainContent clicked={clicked}/>
        </Layout>
      </Layout>

  );
}

