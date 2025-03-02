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
                <h1>Erik Fehér</h1>
                <h3>Software Engineer</h3>
                <div id="welcomeText">
                As a Software Engineer, I like to be in an environment where I can find new challenges
                and improve my skills to my heart's content.
                </div>
                <div id="welcomeButtons">
                    <button onClick={()=> scrollTo("contact")} className="button" >
                        Contact Me <TbSend size={24}/>
                    </button>
                    {
                        window.innerWidth > 1050 ?
                        <a className="button" href="/assets/ErikFeher_CV_2025.pdf" >
                            Resume <TbFileTypePdf size={24}/>
                        </a>
                        :
                        <a className="button" href="/assets/ErikFeher_CV_2025.pdf" download>
                            Resume <TbFileTypePdf size={24}/>
                        </a>
                    }
                </div>
            </div>
            <div id="pictureContainer">
                <div id="landingPicutre" className="bgblob"></div>
            </div>
        </div>
    )
}

export default Home;
