import './contactme.css';
import { GithubOutlined, MailOutlined, PhoneOutlined, LinkedinOutlined } from '@ant-design/icons';
export default function ContactMe() {
  return(
    <div className="contact-container">
      <div className='contact-header'> 
        <h1 className="contact-name">Kendall Swanson</h1>
        <h3 className="contact-title">Full-Stack Web Development</h3>
      </div>
      <div className="contact-links">
        <a href="https://github.com/kvs1995" target="_blank"><GithubOutlined/> Github </a> 
        <a href="mailto:kvscoding@gmail.com" target="_blank"><MailOutlined /> Shoot me an email!</a>
        <p><PhoneOutlined /> 312.636.9833</p>
        <a href="https://www.linkedin.com/in/kendallvswanson/" target="_blank"><LinkedinOutlined /> LinkedIn</a>
      </div>
    </div>

  )
}