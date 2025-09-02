import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ChartArea from './Components/ChartArea';

function App() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("overview");

  return (
    <div data-theme={dark ? "dark" : "light" } >

     <div className="wrapper">
      <header>
      <nav>
        <div className="navbar">
        <div className="navbar-logo text-heading">🌿 Air Quality</div>
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
        {/* KPI Cards */}
        <section className="grid grid-3">
          <div className="card">
            <h3>PM2.5</h3>
            <p className="value text-kpi">42 µg/m³</p>
            <p className="label text-label">Moderate</p>
          </div>
          <div className="card">
            <h3>CO₂</h3>
            <p className="value text-kpi">720 ppm</p>
            <p className="label text-label">Acceptable</p>
          </div>
          <div className="card">
            <h3>O₃</h3>
            <p className="value text-kpi">90 µg/m³</p>
            <p className="label text-label">Elevated</p>
          </div>
        </section>

        {/* Filters */}
        <section className="filter-group" >
          <input type="text" placeholder="Search location..." />
          <select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last year</option>
          </select>
          <button>Apply</button>
        </section>

        {/* Chart */}
        <section className="card">
          <h3>Pollution Trend</h3>
          <p className="label text-label">D3 chart will go here</p>
          <ChartArea/>

        </section>
      </main>
    </div></div>
  
   
  );
}


export default App
