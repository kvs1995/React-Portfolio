import './maincontent.css';
import Home from '../home/Home'
import AboutMe from '../aboutme/AboutMe';
import Portfolio from '../portfolio/Portfolio';
import ContactMe from '../contactme/ContactMe';
export default function MainContent({clicked}) {
  return(
    <div className='main-content-main'>
      <div className="site-card-wrapper card-container">
        { clicked === "home" ? <Home /> 
        : clicked === "about-me" ? <AboutMe />
        : clicked === "portfolio" ? <Portfolio />
        : <ContactMe />}
       
      </div>
    </div>
  )
}