import './App.css'
import Home from './components/home/Home'
import NavigationBar from './components/navigation/NavigationBar';

function App() {
 

  return (
    <>
        <NavigationBar/>
        <main id="mainContainer">
            <Home/>
        </main>
    </>
  )
}

export default App;
