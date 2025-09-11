import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dashboard from './Components/Dashboard';


function App() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("overview");

  return (
    <div data-theme={dark ? "dark" : "light" } >

     <div className="wrapper">
      <header>
      <nav>
        <div className="navbar">
        <div className="navbar-logo text-heading">Air Quality</div>
        <div className="navbar-tabs">
          <a
            href="#"
            className={tab === "overview" ? "active" : ""}
            onClick={() => setTab("overview")}
          >
            Overview
          </a>
          <a
            href="#"
            className={tab === "details" ? "active" : ""}
            onClick={() => setTab("details")}
          >
            Details
          </a>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
          <span className="slider"></span>
        </label>
        </div>
      </nav>
      </header>

      {/* Dashboard Container */}
      <main className="container">
          <Dashboard/>
      </main>
    </div></div>
  
   
  );
}


export default App
