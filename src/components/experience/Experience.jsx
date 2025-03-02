import "./Experience.css"
import Card from "../ui/Card"
import { IoEarth } from "react-icons/io5";


function Experience() {

    return (
        <div id="experience">
            <div>
                <h2 id="experienceTitle">
                    Experience
                </h2>

            </div>
            
            <div id="experienceCardContainer">
            <Card 
                title="SAP" 
                text="At SAP, I collaborate with a team of developers following the Scrum methodology to build and enhance an application."
                cardPositionName = "Software Engineer"
                fromTo = "Sep 2024 - Present"
                image = "/assets/SAP.png"
                buttonAction = {true}
                links = {[{
                    website: "https://www.sap.com/",
                    icon: IoEarth,
                    key: 0
                }]}
                modalText={
                <div>
                    <p>
                    At SAP, I collaborate with a team of developers following the <b>Scrum</b> methodology to build and enhance an application,
                    using both <b>Jetpack Compose</b> and <b>View-based UI</b>, integrating with <b>SAP Fiori Elements</b> while following best practices of <b>MVVM</b> architectural pattern.
                    </p>
                </div>
                }
            />
            <Card 
                title="Gerhardt Informatics" 
                text="I am contributing to projects like a carpooling website and a canteen monitoring site, handling both frontend and backend tasks."
                cardPositionName = "Software Engineer"
                fromTo = "Jul 2022 - Jul 2024"
                image = "/assets/gerhardt.png"
                buttonAction = {true}
                links = {[{
                    website: "https://www.gerhardt.io/",
                    icon: IoEarth,
                    key: 0
                }]}
                modalText={
                <div>
                    <p>
                    As a software engineer, I developed several projects with a team of developers using different technologies
                    and tools including <b>Kotlin</b>, <b>Java</b>,  <b>Spring</b>, <b>Dropwizard</b>, <b>Git</b>, <b>PostgreSQL</b>, <b>Jenkins</b>, <b>Caddy</b>, <b>Keycloak</b>.
                    The main projects were a carpooling website and a monitoring website for canteens. For these sites,
                    I implemented and changed features both in <b>frontend</b> and <b>backend</b>. Besides software development,
                    I communicated with customers and I provided support and feedback for interns to improve their skills
                    in software development.
                    </p>
                    <p>
                    While I was an intern, my colleagues taught me how I can work with a team of experienced developers to <b>design</b>,
                    <b>implement</b>, and <b>test</b> new features and functionality. Throughout my internship, I gained valuable experience in
                    best practices, including <b>version control</b>, <b>debugging</b> and <b>continuous deployment</b>.
                    Through my work, I was contributing to the successful delivery of a carpooling website as I made all the unit
                    and ui tests up to date using <b>Concordion</b>. I also implemented a map feature using <b>Leaflet</b> that led to a much
                    better overview of the route of the trips.
                    </p>
                </div>
                }
            />
            
            <Card 
                title="Dr Code" 
                text=" As a programmer instructor, I taught elementary school students how to code using Scratch."
                cardPositionName = "Programming Instructor"
                fromTo = "Nov 2018 - Apr 2019"
                image = "/assets/drcode.png"
                buttonAction = {() => console.log("working")}
                links = {[{
                    website: "https://programozzvelunk.hu/",
                    icon: IoEarth,
                    key: 0
                },]}
                modalText={
                    <div>
                        <p>
                        As a programmer instructor, I taught students how to code using Scratch.
                        I tried to ensure that each student was challenged and engaged while learning basic programming
                        concepts. I provided support and feedback to help them build their skills and to inspire the new
                        generation of young coders.
    
                        </p>
                    </div>
                        }
            />
            <Card 
                title="Univer Product Zrt" 
                text="During highschool, I spent my summers working in a factory. This was my first experience, where I was able to learn at a young age what it meant to work at a company."
                cardPositionName = "Factory Worker"
                fromTo = "2017 - 2020"
                image = "/assets/univer.jpg"
                buttonAction = {true}
                links = {[{
                    website: "https://www.univer.hu/",
                    icon: IoEarth,
                    key: 0
                }]}
                modalText={
                <div>
                    <p>
                        During highschool, I spent my summers working in a factory.
                        This was my first experience, where I was able to learn at a young age what it meant to work at a company.
                    </p>
                    <p>
                        Amongst my duties I mostly had to wash the lid of barrels or get the barrels ready for transport.
                        This included cleaning, painting, wrapping and labeling the barrels.
                    </p>
                </div>
                    }
            />
            
            
            </div>
            
            
        </div>
    )
}

export default Experience;
