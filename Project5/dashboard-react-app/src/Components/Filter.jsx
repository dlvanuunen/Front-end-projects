import { useEffect, useState } from "react";
import { fetchStations, getStationMeasurements } from "../Api";
import Select from "react-select";

// import { useState } from "react"

function Filter() {
  const [stations, setStations] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchStations().then(({dict, options}) => {  
      setStations(dict);
      setOptions(options);})
  }, []);

  const handleSelectedOption = (option) => {
    setSelectedOption(option.value);
    console.log(`selected value changed to: ${option.value}`);
  };

  const handleAppyClick = () => {
    console.log(
      "selected value from selectOption state variable:",
      selectedOption)
      
    // If selectedOption exist => run function
     selectedOption && getStationMeasurements(selectedOption);
  };

  return (
    <>
      {/* Filters */}
      <section className="filter-group">
        <Select
          options={options}
          isSearchable={true}
          placeholder="Search location"
          onChange={handleSelectedOption}
          className="location-select"
          classNamePrefix="location-select"
        />
        <input type="text" placeholder="Search location..." />
        <select>
          {options.map((station, index) => (
            <option key={index} value={station.value}>
              {station.label}
            </option>
          ))}
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last year</option>
        </select>

        <button onClick={handleAppyClick}>Apply</button>
      </section>
    </>
  );
}

export default Filter;
