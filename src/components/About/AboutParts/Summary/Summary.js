import Frame from "../../../GeneralComponents/Frame/Frame";
import './Summary.css'
import logo from './Huy420.gif';

function Summary() {
    return ( 
        <Frame windowName={"Summary"} id="summary">
            <div className="summary-container">
                <div className="summary-text">
                    <div className="summary-text-inner">
                            Hello,<br/>
                            I am Dmitry Rylov, a web developer. 
                            In the summer of 2022, I completed my bachelor's degree in Applied Mathematics and Informatics at MPEI. 
                            For my graduation project, I developed a predictive model for forecasting Counter-Strike matches.<br/>
                            In the autumn of 2022, I relocated to Israel. 
                            In the summer of 2023, I successfully completed the "Frontend Training" course offered by Elevation. 
                            I am currently dedicated to further enhancing my skills in web development.
                    </div>
                    
                </div>
                <div className="summary-avatar">
                    <img src={logo} className="avatar"/>
                </div>
                <div className="summary-skills">
                    <div className="summary-skills-category">
                        <div>Backend skills: </div>
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=yellow"/>
                        <img src="https://img.shields.io/badge/Flask-yellow?style=for-the-badge&logo=flask&logoColor=white"/>
                        <img src="https://img.shields.io/badge/Sqlalchemy-red?style=for-the-badge&logo=SQLAlchemy&logoColor=white" />
                        <img src="https://img.shields.io/badge/MySQL-blue?style=for-the-badge&logo=mysql&logoColor=black"/>
                        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
                        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
                    </div>
                    <div className="summary-skills-category">
                        <div>Frontend skills: </div>
                        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB "/>
                        <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white "/>
                        <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white "/>
                    </div>
                    <div className="summary-skills-category">
                        <div>Also my skills: </div>
                        <img src="https://img.shields.io/badge/npm-232F3E?style=for-the-badge&logo=npm&logoColor=red"/>
                        <img src="https://img.shields.io/badge/pypi-3776AB?style=for-the-badge&logo=pypi&logoColor=yellow"/>
                        <img src="https://img.shields.io/badge/numpy-013243?style=for-the-badge&logo=numpy&logoColor=yellow"/>
                        <img src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=yellow"/>
                        <img src="https://img.shields.io/badge/keras-D00000?style=for-the-badge&logo=keras&logoColor=white"/>
                        <img src="https://img.shields.io/badge/qt-41CD52?style=for-the-badge&logo=qt&logoColor=white"/>
                    </div>
                
                </div>
                
            </div>
        </Frame>
     );
}

export default Summary;