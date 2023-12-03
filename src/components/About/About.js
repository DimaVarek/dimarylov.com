import './About.css'
import Education from './AboutParts/Education/Education';
import Jobs from './AboutParts/Jobs/Jobs';
import Summary from "./AboutParts/Summary/Summary";
function About() {
    return ( 
        <div className="about-container">
            <div className="about-title">ABOUT</div>
            <Summary />
            <Education />
            <Jobs />
        </div>
     );
}

export default About;