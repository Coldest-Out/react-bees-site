import './App.css'
import { NavbarView } from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Router>
        <NavbarView />
      </Router>

    </div>
  )
}

export default App
