import { FaLinkedin, FaGithub } from "react-icons/fa";

function NavigationBar() {

    

    return (
        <div id="navBarContainer">
            <div id="navBarContent">
                <div id="brand">
                    <a id="linkedin"><FaLinkedin size={24}/></a>
                    <a id="github"><FaGithub size={24}/></a>
                </div>
                <div id="navButtonContainer">
                    <button className="navButton">Home</button>
                    <button className="navButton">About</button>
                    <button className="navButton">Skills</button>
                    <button className="navButton">Projects</button>
                    <button className="navButton">Content</button>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;
