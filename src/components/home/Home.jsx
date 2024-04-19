import { TbSend, TbFileTypePdf  } from "react-icons/tb";
import './Home.css'

function Home() {
 
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id="home">
            <div id="welcomeContainer">
                <h1>Hi, I'm Erik!</h1>
                <h3>Software Engineer</h3>
                <div id="welcomeText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div id="welcomeButtons">
                    <button onClick={()=> scrollTo("contact")} className="button" >
                        Contact Me <TbSend size={24}/>
                    </button>
                    <a className="button">
                        Resume <TbFileTypePdf size={24}/>
                    </a>
                </div>
            </div>
            <div id="pictureContainer">
                <div id="landingPicutre" className="bgblob"></div>
            </div>
        </div>
    )
}

export default Home;
