import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Navigation.css'
import { useEffect, useRef, useState } from "react";
function NavigationBar() {
    const [scroll,setScroll] = useState(0);
    const navButtonBackgroundRef = useRef();
    const homeButtonRef = useRef();
    const experienceButtonRef = useRef();
    const skillsButtonRef = useRef();
    const projectButtonRef = useRef();
    const contactButtonRef = useRef();

    useEffect(()=>{
        document.addEventListener("scroll", ()=>{
            setScroll(window.scrollY);
        })
        window.addEventListener("resize", ()=>{
            setScroll(window.scrollY);
        })
    },[])

    useEffect(()=>{
        
        buttonBackgroundMove();
    },[scroll])

    const buttonBackgroundMove = () => {
        const experience = document.getElementById("experience");
        const skills = document.getElementById("skills");
        const project = document.getElementById("project");
        const contact = document.getElementById("contact");
        
        const experiencePosition = experience.offsetTop;
        const skillsPosition = skills.offsetTop;
        const projectPosition = project.offsetTop;
        const contactPosition = contact.offsetTop;

        if(scroll<experiencePosition-1){
            changeStyleOfNavButton(homeButtonRef.current);
        } else if(scroll<skillsPosition-1){
            changeStyleOfNavButton(experienceButtonRef.current);
        } else if(scroll<projectPosition-1){
            changeStyleOfNavButton(skillsButtonRef.current);
        } else if(scroll<contactPosition-1){
            changeStyleOfNavButton(projectButtonRef.current);
        } else {
            changeStyleOfNavButton(contactButtonRef.current);
        }
    }

    const resetButtons = (excluded) => {
        if(excluded !== homeButtonRef.current) homeButtonRef.current.style.color = "#333333";
        if(excluded !== experienceButtonRef.current) experienceButtonRef.current.style.color = "#333333";
        if(excluded !== skillsButtonRef.current) skillsButtonRef.current.style.color = "#333333";
        if(excluded !== projectButtonRef.current) projectButtonRef.current.style.color = "#333333";
        if(excluded !== contactButtonRef.current) contactButtonRef.current.style.color = "#333333";
    }

    const changeStyleOfNavButton = (element) => {
        navButtonBackgroundRef.current.style.left = "calc("+element.offsetLeft+"px - 10px)";
        navButtonBackgroundRef.current.style.width = element.clientWidth+"px";
        element.style.color = "#ffffff";
        resetButtons(element);
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id="navBarContainer">
            <div id="navBarContent">
                <div id="brand">
                    <a id="linkedin" className="icon"
                        href="https://www.linkedin.com/in/ericfeher/"
                        target="_blank">
                        <FaLinkedin size={18}/>
                    </a>
                    <a id="github" className="icon"
                        href="https://github.com/EricFeher"
                        target="_blank">
                        <FaGithub size={18}/>
                    </a>
                </div>
                <div id="navButtonContainer">
                    <button onClick={() => scrollTo("home")} className="navButton" ref={homeButtonRef}>Home</button>
                    <button onClick={() => scrollTo("experience")}  className="navButton" ref={experienceButtonRef}>Experience</button>
                    <button onClick={() => scrollTo("skills")}  className="navButton" ref={skillsButtonRef}>Skills</button>
                    <button onClick={() => scrollTo("project")}  className="navButton" ref={projectButtonRef}>Projects</button>
                    <button onClick={() => scrollTo("contact")}  className="navButton" ref={contactButtonRef}>Contact</button>
                    <div id="navButtonBackground" ref={navButtonBackgroundRef}></div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;
