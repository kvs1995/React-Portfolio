import './aboutme.css';
import profilePicture from '../../images/IMG_4734.JPG'
import profilePicture2 from '../../images/profile3.jpeg'
export default function AboutMe() {
  return(
    <div className='about-me-container'>
      <h1>A bit about me...</h1> 

      <div className="about-me-content-1">
   
          <img className='about-me-image-1' src={profilePicture} alt="Profile Picture"/>
      
        <div className='about-me-text'>
          <p>I attended University of Iowa for Bioinformatics and a Minor in Italian. What started off as a random class selection for Introduction to Computer Science, lead to a love of coding and learning new languages.</p> 
          <p>For the past 2 and a half years, I have been working at the Chicago-based company Strata Decision Technology as an Advanced Planning Technical Consultant for the healthcare finance tool StrataJazz. Here, I have gained valuable skills in client/internal communciation and problem-solving, as well as expanded my understanding of SQL and database structures.</p>
        </div>
      </div> 

      <div className='about-me-content-2'>
        <div className='about-me-text'>
          <p> While my background has been focused mainly in Python and SQL, I have always been interested extending my repertoire. To explore more in the world of coding. I joined the CodeAcademy community in 2018, which provided a hundreds of learning oppurtunities and potential paths I could learn more about. These lessons were the gateway that brought me to where I am at now.</p>
          <p> In September 2021, I began a Northwestern Coding Bootcamp that focuses on Full Stack Web Development. Throughout this class, my enjoyment of this field has only grown and confirmed that this is the field I'm meant to be in!</p>
          <p> As of March 2022, I have officially completed the bootcamp and received a certificate for Fully Stack Web Development Coding Boot Camp and although I miss meeting with my class every week, I can't wait to continue furthering my education and seeing what I can do.</p>
        </div>
        <img className="about-me-img-2" src={profilePicture2} alt="profile 2"/>
      </div>
    </div>
  )
}