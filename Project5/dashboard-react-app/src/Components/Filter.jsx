import { useEffect, useState } from "react";

import Select from "react-select";

// import { useState } from "react"

function Filter({options, handleSelect, handleApply}) {




  return (
    <>
      {/* Filters */}
      <section className="filter-group">
        <Select
          options={options}
          isSearchable={true}
          placeholder="Search location"
          onChange={handleSelect}
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

        <button onClick={handleApply}>Apply</button>
      </section>
    </>
  );
}

export default Filter;
