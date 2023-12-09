import Frame from "../../../GeneralComponents/Frame/Frame";
import './Education.css';
import Timeline, {timelineClasses} from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent,  {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot';
import RepeatIcon from '@mui/icons-material/Repeat';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EducationCard from "./Cards/EducationCard";
import TerminalIcon from '@mui/icons-material/Terminal';
import School from "./Cards/School";
import University from "./Cards/University";
import Course from "./Cards/Course";
import Current from "./Cards/Current";

function Education() {
    return ( 
        <Frame windowName={"Education"} id="education">
            <div className="education-container">
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0,
                    padding: 0,
                    },
                    [`& .${timelineItemClasses.root}`]: {
                        padding: 0,
                    }
                }}
                >
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className="education-step-name">
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <SchoolIcon />                            
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <EducationCard title={'School'}>
                        <School/>
                    </EducationCard>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className="education-step-name">
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <AccountBalanceIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <EducationCard title={'University'}>
                            <University/>
                        </EducationCard>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className="education-step-name">
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot  color="secondary">
                        <TerminalIcon />
                    </TimelineDot>
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <EducationCard title={'Frontend course'}>
                            <Course />
                        </EducationCard>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className="education-step-name">
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <EducationCard title={'Self-improvement'}>
                            <Current />
                        </EducationCard>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
            </div>
        </Frame>
     );
}

export default Education;