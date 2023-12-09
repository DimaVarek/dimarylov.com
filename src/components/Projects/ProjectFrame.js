import Frame from "../GeneralComponents/Frame/Frame";
import { register } from 'swiper/element/bundle';
import { GitHub } from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';

register();

function ProjectFrame({projectInfo}) {
    return ( 
        <Frame windowName={projectInfo.name} id={projectInfo.idName}>
            <div className="project-container">
                <div className="project-property">
                    <div>
                        <div>Name: <span className="project-property-info">{projectInfo.name}</span></div>
                        <div>Status: <span className="project-property-info">{projectInfo.status}</span></div>
                        <div>Dates: <span className="project-property-info">{projectInfo.dates}</span></div>
                        <div className="project-link">
                            <GitHub />:
                            <div>
                                {projectInfo.github.map(link => {
                                    return <a href={link} target="_blank">{link}</a>
                                    })
                                }
                            </div>
                        </div>
                        <div className="project-link">
                            <LanguageIcon />: 
                            <div>
                                {projectInfo.websites.map(link => {
                                    return <a href={link} target="_blank">{link}</a>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className="project-swiper">
                    <swiper-container 
                        pagination="true"
                        pagination-dynamic-bullets="true">
                            {projectInfo.images.map(image => {
                                return <swiper-slide><img className="swiper-img" src={image}/></swiper-slide>
                            })}
                    </swiper-container>
                </div>
                <div className="project-description">
                    <div className="project-description-title">Description</div>
                    {projectInfo.description}
                </div>
            </div>
        </Frame>
     );
}

export default ProjectFrame;