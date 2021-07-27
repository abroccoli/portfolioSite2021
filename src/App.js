import resume from "./images/AnthonyBroccoliResume.pdf";
import headshot from "./images/hiking_headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faBiking, faCode, faSkiing } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

function App() {
  return (
    <div className="App">
        <img src={headshot}
        className="headshot-image" />
        <h1>Anthony Broccoli</h1>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
            &gt; <span>resume</span> &lt;
        </a>
        <div className="adjective-container">
            <div className="adjective-item">
                <FontAwesomeIcon icon={faCode} />
                <div>coder.</div>
            </div>
            <div className="adjective-item">
                <FontAwesomeIcon icon={faBiking} />
                <div>mountain biker.</div>
            </div>
            <div className="adjective-item">
                <FontAwesomeIcon icon={faSkiing} />
                <div>skier.</div>
            </div>
            <div className="adjective-item">
                <FontAwesomeIcon icon={faBeer} />
                <div>craft beer lover.</div>
            </div>
        </div>
    </div>
  );
}

export default App;
