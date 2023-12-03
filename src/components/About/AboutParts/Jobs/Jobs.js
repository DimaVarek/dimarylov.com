import Frame from "../../../GeneralComponents/Frame/Frame";
import JobCard from "./JobCard/JobCard";
import './Jobs.css'

function Jobs() {
    const jobPlases = [
        {
            position: "Research student",
            company: "MPEI",
            dates: "September 2021 - June 2022",
            description: "Throughout the 2021-2022 academic year, I dedicated my efforts to preparing a thesis in the field of machine learning. I developed a program for data collection, processed the data, and thoroughly explored various machine learning methods, identifying which ones were more effective in tackling the specified task. This experience not only enriched my skill set but also highlighted my commitment to in-depth research and improvement in the field of machine learning."
        },
        {
            position: "C# developer",
            company: "Solution (Moscow)",
            dates: "August 2022 - July 2023",
            description: "I held the position of a Junior Developer, focusing on the development of a thick user interface for Windows operating systems in computer clubs. Throughout this process, my primary tools became RestAPI and WPF technologies, enabling me to expand my technical toolkit and gain a deeper understanding of crafting a high-quality user experience. Additionally, during my work, I acquired skills in effective teamwork and valuable experience in collaborative project development. Working in a team enhanced my understanding of the importance of consistency and interaction in the creation of software solutions, while also refining my skills in problem analysis and resolution."
        },
        {
            position: "Python teacher",
            company: "Innopolis",
            dates: "November 2022 - May 2023",
            description: "In this engaging role, I taught school students programming in Python. I served as a lecturer in large groups of up to 20 people, explaining the intricacies of working with graphical interfaces using Qt5."
        },
        {
            position: "Web developer",
            company: "-",
            dates: "August 2023 - now",
            description: "Currently, I am an independent web developer. After completing the frontend course, my colleagues and I decided to create an application aimed at helping people in Israel find employment. In this project, I take on the role of an initiator, responsible for the creation and deployment of the backend server using technologies such as Python, Flask, SqlAlchemy, as well as Linux, nginx, and gunicorn. Additionally, I contribute to the frontend development using JS, React, and MUI. Our collaborative work is organized through the use of git and Trello.",
            end: false
        }
    ]
    return ( 
        <Frame windowName={"Jobs"}>
            <div className="job-container">
                {jobPlases.map(jobInfo => <JobCard jobInfo={jobInfo} separator={jobInfo.end}/>)}
            </div>
        </Frame>
     );
}

export default Jobs;