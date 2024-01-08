import Navbar from "./components/Navbar"
import TextAnalyze from "./components/TextAnalyze"
import './App.css'
import { useState } from "react"
import Alert from "./components/Alert"
import About from './components/About'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const alertShow = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');

    setMode(body.classList.contains('dark') ? 'dark' : 'light');

    body.classList.contains('dark') ? alertShow("success", "Dark Mode Enabled") : alertShow("success", "Light Mode Enabled")
  }

  return (
    <Router>
      <>
        <Navbar brand="Text-Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route index exact path="/" element={<TextAnalyze alertShow={alertShow} heading="Try TextAnalyzer - Your One Stop Solution for Analyzing texts..." />} />
            
          <Route exact path="/about" element={ <About />} />
           
          <Route exact path="/contact" element={<Contact />} />
    
        </Routes>

      </>
    </Router>

  )
}

export default App
