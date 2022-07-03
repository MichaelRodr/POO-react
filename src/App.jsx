
import logo from './logo.svg'
import './App.css'
import DirectorioContacto from './components/container/directorioContacto'

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <DirectorioContacto />
        
         
      </header>
    </div>
  )
}

export default App
