
import Skill from '../ui/Skill';
import './Skills.css'

function Skills() {
 
  return (
    <div id="skills">
        <h2>Skills</h2>
        <div className="skillsContent">
            <Skill name="Java" url="/assets/java.png" height={40}/>
            <Skill name="Kotlin" url="/assets/kotlin.png" height={40}/>
            <Skill name="Javascript" url="/assets/javascript.png" height={35}/>
            <Skill name="Typescript" url="/assets/typescript.png" height={35}/>
            <Skill name="HTML" url="/assets/html.png" height={35}/>
            <Skill name="CSS" url="/assets/css.png" height={35}/>
            <Skill name="Python" url="/assets/python.png" height={40}/>
        </div>
        <div className="skillsContent">
            <Skill name="PostgreSQL" url="/assets/postgres.png" height={35}/>
            <Skill name="Firebase" url="/assets/firebase.png" height={35}/>
            <Skill name="Docker" url="/assets/docker.webp" height={35}/>
            <Skill name="Git" url="/assets/git.png" height={35}/>
            <Skill name="Linux" url="/assets/debian.png" height={35}/>
            <Skill name="Caddy" url="/assets/caddy.png" height={50}/>
            <Skill name="Jenkins" url="/assets/jenkins.png" height={40}/>
        </div>
        <div className="skillsContent">
            <Skill name="React" url="/assets/react.png" height={35}/>
            <Skill name="Spring" url="/assets/spring.png" height={35}/>
            <Skill name="NodeJS" url="/assets/node.png" height={35}/>
            <Skill name="Express" url="/assets/express.png" height={35}/>
        </div>
        
    </div>
  )
}

export default Skills;
