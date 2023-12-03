import { Card } from "@mui/material";
import Separator from "../../../../GeneralComponents/Separator/Separator";

function JobCard({jobInfo, separator = true}) {
    return ( 
        <div className="job-card-container">
            <Card>
                <div className="job-card-inner">
                    <div className="job-card-position">{jobInfo.position}</div>
                    <div className="job-card-company">{jobInfo.company}</div>
                    <div className="job-card-dates">{jobInfo.dates}</div>
                    <div className="job-card-description">
                        {jobInfo.description}
                    </div>
                </div>
            </Card>
            {separator ? 
                <Separator/> :
                ""
            }
        </div>
     );
}

export default JobCard;