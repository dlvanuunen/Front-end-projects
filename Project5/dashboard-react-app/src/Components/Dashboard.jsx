import { useState, useEffect, useMemo } from "react";
import * as d3 from "d3";

import ChartArea from "./ChartArea";
// import TestData from "./Chartparts/TestData";
import Filter from "./Filter";

import { fetchStations, getStationMeasurements } from "../Api";
import { latestByCompound, topByPriority, formatF } from "../DataTransform";

function Dashboard() {
  const [stations, setStations] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState("PM10");
  const [measurements, setMeasurements] = useState({});


  useEffect(() => {
    fetchStations().then(({ dict, options }) => {
      setStations(dict);
      setOptions(options);
    });
  }, []);



  const priorityList = [
    "PM25",
    "PM10",
    "NO2",
    "NO",
    "O3",
    "CO",
    "SO2",
    "C6H6",
    "C7H8",
    "C8H10",
    "PS",
    "FN",
    "BCWB",
  ];


//  If measurement changes update the formula options
    const formulaOptions = useMemo(() => {
    const data = measurements[selectedOption] ?? [];
    if (!Array.isArray(data) || data.length === 0) return [];
    return [...new Set(data.map(d => d.formula).filter(Boolean))];
  }, [measurements, selectedOption]);

  // Make sure selectedFormula is valid for the new station
  useEffect(() => {
    if (formulaOptions.length === 0) {
      setSelectedFormula("");
      return;
    }
    // if current selectedFormula still exists keep it, else pick the first in the new list of formula options
    if (!selectedFormula || !formulaOptions.includes(selectedFormula)) {
      setSelectedFormula(formulaOptions[0]);
    }
  }, [formulaOptions, selectedFormula]); // intentionally not including selectedFormula here



    const kpiValues = useMemo(() => {
    const data = measurements[selectedOption] ?? [];
    // Gets the most recent entry for each compound which we need to display in the kpi cards)
    const latest = latestByCompound(data);
    const top3 = topByPriority(latest, priorityList, 3);
    while (top3.length < 3) top3.push({ formula: "N/A", value: "N/A", label: "N/A" });
    return top3;
  }, [measurements, selectedOption]);


  const handleSelectedOption = (option) => {
    setSelectedOption(option.value);
    console.log(`selected value changed to: ${option.value}`);
  };



  // #####################################################################################//

  // OLD comments:
  // Applies filter selection:
  // Fetches new data for selected location.
  // Sets KPI cards for latest measurement with highest priority formula.
  // Sets formula filter options for the graph

  // Consideration for rework/next project: Fetch only once, store results in state.
  // Add a filter state with all filterable options and useEffect on the options state to update on change without recalling api's.

  //New comments:
  // Moved logic for filter options and kpi cards to memo, so they are derived from the current selected measearument (measurements[selectedOption])

  const handleApplyClick = async () => {
    console.log(
      "selected value from selectOption state variable:",
      selectedOption
    );

    if (!selectedOption) return;
    if (measurements[selectedOption]) {
      console.log("Station data already exist, not calling api");
      return;
    }
    // If selectedOption exist => run function
    const data = await getStationMeasurements(selectedOption);
    setMeasurements((prev) => ({ ...prev, [selectedOption]: data }));
    console.log(
      `measurement for station ${selectedOption} loaded and stored in: `,
      data
    );
 
  };

  // #####################################################################################//

  const handleSelectedFormula = (e) => {
    const value = e.target.value;
    setSelectedFormula(value);
    console.log("selected formula:", value);
  };



  return (
    <>
      <section className="grid grid-3">
        <div className="card">
          <h3>{formatF(kpiValues[0].formula)}</h3>
          <p className="value text-kpi">{`${kpiValues[0].value} μg/m³`}</p>
          <p className="label text-label">Moderate</p>
        </div>
        <div className="card">
          <h3>{formatF(kpiValues[1].formula)}</h3>
          <p className="value text-kpi">{`${kpiValues[1].value} μg/m³`}</p>
          <p className="label text-label">Moderate</p>
        </div>
        <div className="card">
          <h3>{formatF(kpiValues[2].formula)}</h3>
          <p className="value text-kpi">{`${kpiValues[2].value} μg/m³`}</p>
          <p className="label text-label">Moderate</p>
        </div>
      </section>

      <Filter
        options={options}
        formulas={formulaOptions}
        handleSelectOption={handleSelectedOption}
        handleApply={handleApplyClick}
        handleSelectFormula={handleSelectedFormula}
        selectedFormula={selectedFormula}
      />

      {/* Chart */}
      <section className="card">
        <h3>Pollution</h3>

        {/* <ChartArea data={measurements[selectedOption]} selectedFormula={selectedFormula} /> */}
        <ChartArea
          measurement={measurements[selectedOption] ?? null}
          formula={selectedFormula}
        />
      </section>
    </>
  );
}
export default Dashboard;
