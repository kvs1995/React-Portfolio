import logo from './logo.svg';
import './App.css';
import NavMenu from './components/menu/NavMenu'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import { useState } from 'react'; 
const { Header, Sider, Content } = Layout;

export default function App() {
  return (
    <NavMenu /> 

  );
}

