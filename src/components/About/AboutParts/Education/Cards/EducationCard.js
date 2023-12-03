import { Card } from "@mui/material";

function EducationCard({children, title}) {
    return ( 
        <Card>
            <div className="education-card-title">{title}</div>
            {children}
        </Card>
     );
}

export default EducationCard;