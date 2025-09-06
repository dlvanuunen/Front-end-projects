import { useEffect, useState } from "react";
import { fetchStations } from "../Api";
import Select from "react-select";

// import { useState } from "react"

function Filter() {
  const [stations, setStations] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchStations().then((list) => {
      const sorted_list = list.sort();

      setStations(sorted_list);
      setOptions(
        sorted_list.map((station) => ({ value: station, label: station }))
      );
    });
  }, []);

  const handleSelectedOption = (option) => {
    setSelectedOption(option.value);
    console.log(`selected value changed to: ${option.value}`);
  };

  const handleAppyClick = () => {

    console.log("selected value from selectOption state variable: ", selectedOption)
  }



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
        />
        <input type="text" placeholder="Search location..." />
        <select>
          {stations.map((station, index) => (
            <option key={index}>{station}</option>
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
