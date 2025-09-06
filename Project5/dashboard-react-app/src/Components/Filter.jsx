import { useEffect, useState } from "react"
import { fetchStations } from "../Api"
// import { useState } from "react"

function Filter(){

    const [stations, setStations]= useState([])


    useEffect(()=>{
     
    fetchStations().then(list => setStations(list.sort()))
    }, [])


return(<>



        {/* Filters */}
        <section className="filter-group" >
          <input type="text" placeholder="Search location..." />
          <select>
            {stations.map((station, index) => <option key={index}>{station}</option>) }
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last year</option>
          </select>
          <button>Apply</button>
        </section>


</>)

}


export default Filter