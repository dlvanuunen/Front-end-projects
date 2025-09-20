import { useState, useEffect } from "react";
import * as d3 from "d3";

import ChartArea from "./ChartArea";
// import TestData from "./Chartparts/TestData";
import Filter from "./Filter";

import { fetchStations, getStationMeasurements } from "../Api";
import { latestByCompound, topByPriority} from "../DataTransform";

function Dashboard() {
  const [stations, setStations] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFormula, setSelectedFormula]=useState("PM10")
  const [measurements, setMeasurements] = useState({});
  const [formulaOptions, setFormulaOptions] = useState([])
  const [kpiValues, setKpiValues] = useState([
    { formula: "PM25", value: 0 },
    { formula: "PM10", value: 0 },
    { formula: "NO2", value: 0 },
  ]);

  const formulaFMap = {
  PM25: "PM2.5",
  PM10: "PM10",
  O3: "O₃",
  NO2: "NO₂",
  CO2: "CO₂",
  SO2: "SO₂",
  PS: "PS"
 };


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
    "BCWB"
  ];

  useEffect(() => {
    fetchStations().then(({ dict, options }) => {
      setStations(dict);
      setOptions(options);
    });
  }, []);


  const handleSelectedOption = (option) => {
    setSelectedOption(option.value);
    console.log(`selected value changed to: ${option.value}`);
  };


  // Applies filter selection:
  // Fetches new data for selected location.
  // Sets KPI cards for latest measurement with highest priority formula.
  // Sets formula filter options for the graph

  // Consideration for rework/next project: Fetch only once, store results in state. 
  // Add a filter state with all filterable options and useEffect on the options state to update on change without recalling api's.


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

    const latest = latestByCompound(data);
    const top3 = topByPriority(latest, priorityList, 3);
    while (top3.length < 3) top3.push([{ formula: "N/A", value: "N/A", label: "N/A" }]);
    setKpiValues(top3);

    const formulas = Object.keys(latest); 
    console.log(formulas)
    setFormulaOptions(formulas)
  };

  const handleSelectedFormula = (e) => {
    const value = e.target.value
    setSelectedFormula(value)
        console.log("selected formula:", value)

  }
   

function formatF(formula) {
  return formulaFMap[formula] ?? formula; // fallback to original
}





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
        formulas= {formulaOptions}
        handleSelectOption={handleSelectedOption}
        handleApply={handleApplyClick}
        handleSelectFormula={handleSelectedFormula}
      />

      {/* Chart */}
      <section className="card">
        <h3>Pollution</h3>
        <p className="label text-label">Chart</p>
        {/* <ChartArea data={measurements[selectedOption]} selectedFormula={selectedFormula} /> */}
       <ChartArea measurement={measurements[selectedOption]} formula={selectedFormula}/>
            </section>
    </>
  );
}
export default Dashboard;
