import { TbFileTypePdf  } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";


import Card from '../ui/Card';
import './Project.css'

function Project() {
 
  return (
    <div id="project">
        <h2>Projects</h2>
        <div id='porjectContent'>
            <Card 
                title="Namebot" 
                text="I made a twitch alert box system and chatbot for streamers and their viewers to improve their experience."
                cardPositionName = "Thesis for Bachelor's Degree"
                image = "/assets/twitch.png"
                links={[
                    {
                        website: "https://github.com/EricFeher/Chatbot-Backend",
                        icon: FaGithub,
                        key: 0
                    },
                    {
                        website: "https://github.com/EricFeher/Chatbot-Frontend",
                        icon: FaGithub,
                        key: 1
                    },
                    {
                        website: "/assets/thesis.pdf",
                        icon: TbFileTypePdf,
                        key: 2
                    },
            ]}
            />
            <Card 
                title="Persona" 
                text="I created my personal website, because it's easier to connect and I can show off as well."
                cardPositionName = "Personal Website"
                image = "/assets/website.png"
                links={[
                    {
                        website: "https://github.com/EricFeher/Personal-Website",
                        icon: FaGithub,
                        key: 0
                    },
            ]}
            />
            <Card 
                title="Cam Character" 
                cardPositionName = "Hobby Project"
                text="Lately I've been experimenting with MediaPipe and I want
                 to turn the data to a 3D character in three.js. This is a work in progress project."
                image = "/assets/tracking.png"
                links={[
                    {
                        website: "https://github.com/EricFeher/Cam-Character",
                        icon: FaGithub,
                        key: 0
                    },
            ]}
            />
        </div>
    </div>
  )
}

export default Project;
