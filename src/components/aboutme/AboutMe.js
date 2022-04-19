import './aboutme.css';
import profilePicture from '../../images/IMG_4734.JPG'
export default function AboutMe() {
  return(
    <div className='about-me-container'>
      <div className='about-me-image'> 
        <img src={profilePicture} alt="Profile Picture"/>
      </div>
      <div className='about-me-text'>
        <p>I attended University of Iowa for Bioinformatics and a Minor in Italian. What started off as a random class selection for Introduction to Computer Science, lead to a love of coding and learning new languages.</p> 
        <p>For the past 2 and a half years, I have been working at the Chicago-based company Strata Decision Technology as an Advanced Planning Technical Consultant for the healthcare finance tool StrataJazz. Here, I have gained valuable skills in client/internal communciation and problem-solving, as well as expanded my understanding of SQL and database structures.</p>
      </div>
    </div>
  )
}