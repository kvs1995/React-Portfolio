import logo from './logo.svg';
import './App.css';
import NavHeader from './components/navheader/NavHeader'
import MainContent from './components/maincontent/MainContent';
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { useState } from 'react'; 
import {   Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import AboutMe from './components/aboutme/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contactme/ContactMe';

const { Header, Sider, Content } = Layout;
export default function App() {
  const [clicked, setClicked]= useState('home')
  // const [collapsed, setCollapsed] = useState(true)
  // const [visible, setVisible] =

  return (


      <Layout className="site-layout">
        <NavHeader clicked={clicked} setClicked={setClicked}/>.        
      
          <Routes>
          { clicked === "home" ? <Route path='/' element={<Home />}></Route> 
          : clicked === "about-me" ? <Route path='bio'  element={<AboutMe />}></Route>
          : clicked === "portfolio" ?<Route path='portfolio' element={<Portfolio />}></Route>
          : <Route path='contact' element={<ContactMe />}></Route>}
          </Routes>
        

        <Layout className="background">
          <MainContent clicked={clicked}/>
        </Layout>
      </Layout>

  );
}

