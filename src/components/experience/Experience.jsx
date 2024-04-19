import "./Experience.css"
import Card from "../ui/Card"
import { IoEarth } from "react-icons/io5";


function Experience() {

    return (
        <div id="experience">
            <h2 id="experienceTitle">
                Experience
            </h2>
            <div id="experienceCardContainer">
            <Card 
                title="Gerhardt Informatics" 
                text="During highschool, I spent my summers working as a factory worker."
                cardPositionName = "Software Engineer"
                fromTo = "Jul 2022 - Present"
                image = "/assets/gerhardt.png"
                buttonAction = {() => console.log("working")}
                links = {[{
                    website: "https://www.gerhardt.io/",
                    icon: IoEarth,
                    key: 0
                }]}
            />
            
            <Card 
                title="Dr Code" 
                text="During highschool, I spent my summers working as a factory worker."
                cardPositionName = "Programming Instructor"
                fromTo = "Nov 2018 - Apr 2019"
                image = "/assets/drcode.png"
                buttonAction = {() => console.log("working")}
                links = {[{
                    website: "https://programozzvelunk.hu/",
                    icon: IoEarth,
                    key: 0
                },]}
            />
            <Card 
                title="Univer Product Zrt" 
                text="During highschool, I spent my summers working as a factory worker."
                cardPositionName = "Factory Worker"
                fromTo = "2017 - 2020"
                image = "/assets/univer.jpg"
                buttonAction = {() => console.log("working")}
                links = {[{
                    website: "https://www.univer.hu/",
                    icon: IoEarth,
                    key: 0
                }]}
            />
            
            
            </div>
            
            
        </div>
    )
}

export default Experience;
