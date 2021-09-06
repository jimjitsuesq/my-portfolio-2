import {useState} from 'react';
import axiosLogo from '../../images/projects/logos/axios.svg'
import cssHTMLLogo from '../../images/projects/logos/css_html.svg'
// import reactLogo from '../../images/projects/logos/react3.svg'
import netlifyLogo from '../../images/projects/logos/netlify.svg'

const FlickrSearch = () => {
  const [show, setShow] = useState(false);
  const [screenshot, setScreenshot] = useState();
  const handlePicClick = (e) => {
    if (show) {
      setShow(false);
    } else {
      setScreenshot(require(`../../images/projects/flickrSearch/${e.target.alt}.png`))
      setShow(true);
    }
  }
  // const screenshot1 = require('../../images/projects/flickrSearch/screenshot1.png')
  // const screenshot2 = require('../../images/projects/flickrSearch/screenshot2.png')
  // const screenshot3 = require('../../images/projects/flickrSearch/screenshot3.png')
  return (
  <>
    <header>
      <h1>Flickr Search</h1>
    </header>
    <main>
        <div className="project-text-container">
            <p>Website written in ReactJS that searches for and displays photos from Flickr using their API.</p> 
            <ul>
              <li>Seventh project in my Team Treehouse Full-Stack JavaScript Tech Degree bootcamp program.</li> 
              <li>Received a grade of "Exceeds Expectations" (the highest grade available).</li> 
              <li>Used React Router to track, manipulate and harness the browser history.</li>
            </ul>
            <p>After completing the Team Treehouse bootcamp, I rewrote the app using modern React Hooks as a way to get more practice using those newer functions and streamline the app, which was originally written using the older class syntax.</p>
        </div>
        <div className="project-technology-container">
          <div className="project-technology-box">
            <h3>Built Using</h3>
            <div className="project-technology-box-logo-container">
              {/* <img src={reactLogo} alt='react logo' height='85px' /> */}
              <img src={axiosLogo} alt='axios logo' height='25px' />
              <img src={cssHTMLLogo} alt='css html logos' height='80px' />
            </div>
          </div>
          <div className="project-technology-box">
            <h3>Deployed With</h3>
            <div className="project-technology-box-logo-container">
              <img src={netlifyLogo} alt='netlify logo' height='60px' />
            </div>
          </div>
        </div>
    </main>
    <div className="right-sidebar">
      <div className="right-sidebar-links">
        <a  
            href="https://portfolio-flickr-search.netlify.app/" 
            target="_blank"   
            rel="noreferrer">
            Live Demo
        </a>
        <a  
            href="https://github.com/jimjitsuesq/portfolio-flickr-search" 
            target="_blank" 
            rel="noreferrer">
            Github Repo
        </a>
      </div>
      <div className="right-sidebar-screenshots">
        <img  
              // src={screenshot1.default} 
              alt='screenshot1' 
              height="195px" 
              width="300px"
              onClick={handlePicClick}
        />
        <img  
              // src={screenshot2} 
              alt='screenshot2' 
              height="195px" 
              width="300px"
              onClick={handlePicClick}
        />
        <img
              // src={screenshot3} 
              alt='screenshot3' 
              height="195px" 
              width="300px"
              onClick={handlePicClick}
        />
      </div>
    </div>
    {  show ? <div  className='screenshot-modal' 
                    onClick={handlePicClick}>
                      <img  
                        src={screenshot.default}
                        alt={"Full-Size Screenshot"}
                      /> 
              </div> : '' }
  </>
)};

export default FlickrSearch;