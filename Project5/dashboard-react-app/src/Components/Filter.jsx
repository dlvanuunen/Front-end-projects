import { useEffect, useState } from "react";

import Select from "react-select";

// import { useState } from "react"

function Filter({ options, formulas, handleSelectOption, selectedFormula, handleSelectFormula, handleApply }) {
  return (
    <>
      {/* Filters */}
      <section className="filter-group">
        <Select
          options={options}
          isSearchable={true}
          placeholder="Search location"
          onChange={handleSelectOption}
          className="location-select"
          classNamePrefix="location-select"
          styles={{
            container: (base) => ({
              ...base,
              flex: "1 1 0",
              minWidth: 200,
            }),
            control: (base) => ({
              ...base,
              width: "100%", // ensure it fills the container
            }),
          }}
       
        />
        {/* <input type="text" placeholder="Search location..." /> */}
    
        <select>
    
          <option>Last 24 h</option>
          <option>Last 48 h</option>
          <option>Last Week</option>
        </select>
          <button onClick={handleApply}>Apply</button>

          <select value = {selectedFormula} onChange={handleSelectFormula}>
              {formulas.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
          </select>

      
      </section>
    </>
  );
}

export default Filter;
