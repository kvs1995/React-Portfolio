import './navheader.css';
import { Layout } from 'antd';
import { LineOutlined, MenuOutlined, MoreOutlined } from '@ant-design/icons';
const { Header } = Layout;

export default function NavHeader({ collapsed, setCollapsed }) {

  return(
    <>
      <Header className="site-layout-background custom-header" style={{padding: 0}}>
        <MenuOutlined className="custom-menu-icon" onClick={() => { collapsed ? setCollapsed(false): setCollapsed(true)}}/>
      </Header>
    </>
  )
}