import './About.css'
import Education from './AboutParts/Education/Education';
import Jobs from './AboutParts/Jobs/Jobs';
import Summary from "./AboutParts/Summary/Summary";
function About() {
    return ( 
        <div className="about-container" id="about">
            <div className="about-title">ABOUT</div>
            <Summary id="summary"/>
            <Education  id="education"/>
            <Jobs  id="jobs"/>
        </div>
     );
}

export default About;