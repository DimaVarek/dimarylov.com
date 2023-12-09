import Frame from "../GeneralComponents/Frame/Frame";
import Console from "./Console/Console";
import './Home.css';

function Home() {
    return ( 
        <div className="home-container" id="home">
            <Frame windowName={"Console"}>
                <Console />
            </Frame>
        </div>
     );
}

export default Home;