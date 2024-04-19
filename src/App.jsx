import './App.css'
import Home from './components/home/Home'
import NavigationBar from './components/navigation/NavigationBar';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

function App() {

    return (
        <>
        <div>

        
            <NavigationBar/>
            <main id="mainContainer">
                <Home/>
                <Experience/>
                <Skills/>
                <Project/>
                <Contact/>
            </main>
        </div>
        </>
    )
}

export default App;
