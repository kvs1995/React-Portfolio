
//React Imports
import { Layout } from 'antd'
import { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';

//CSS
import './App.css';
import 'antd/dist/antd.css'

//Outer Components
import NavHeader from './components/navheader/NavHeader'
import MainContent from './components/maincontent/MainContent';

//Components for the Routes
import Home from './components/home/Home'
import AboutMe from './components/aboutme/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contactme/ContactMe';

export default function App() {

  const [clicked, setClicked]= useState('home')

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

