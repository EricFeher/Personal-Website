import { TbSend, TbFileTypePdf  } from "react-icons/tb";

function Home() {
 

  return (
    <div id="home">
        <div id="welcomeContainer">
            <h1>Hi, I'm Erik!</h1>
            <h2>Software Engineer</h2>
            <div id="welcomeText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div id="welcomeButtons">
                <a className="button">
                    Contact Me <TbSend size={24}/>
                </a>
                <a className="button">
                    Resume <TbFileTypePdf size={24}/>
                </a>
            </div>
        </div>
        <div id="pictureContainer">
            <div id="landingPicutre" src="cancelled.png" className="bgblob"></div>
        </div>
    </div>
  )
}

export default Home;
