import { useState, useEffect } from "react";
import * as d3 from "d3";

import ChartArea from "./ChartArea";
import TestData from "./Parts/TestData";
import Filter from "./Filter";

import { fetchStations, getStationMeasurements } from "../Api";
import { latestByCompound, topByPriority } from "../DataTransform";

function Dashboard() {
  const [stations, setStations] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [measurements, setMeasurements] = useState({});
  const [kpiValues, setKpiValues] = useState([
    { formula: "PM25", value: 0 },
    { formula: "PM10", value: 0 },
    { formula: "NO2", value: 0 },
  ]);

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
  ];

  useEffect(() => {
    fetchStations().then(({ dict, options }) => {
      setStations(dict);
      setOptions(options);
    });
  }, []);

  // useEffect(() => {
  //   fetchStations().then(({ dict, options }) => {
  //     setStations(dict);
  //     setOptions(options);
  //   });
  // }, [kpiValues]);

  const handleSelectedOption = (option) => {
    setSelectedOption(option.value);
    console.log(`selected value changed to: ${option.value}`);
  };

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
  };


  const formulaFMap = {
  PM25: "PM2.5",
  PM10: "PM10",
  O3: "O₃",
  NO2: "NO₂",
  CO2: "CO₂",
  SO2: "SO₂"
  // add more if needed
};

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
        handleSelect={handleSelectedOption}
        handleApply={handleApplyClick}
      />

      {/* Chart */}
      <section className="card">
        <h3>Pollution</h3>
        <p className="label text-label">Chart</p>
        <ChartArea data={measurements[selectedOption]} />

        <TestData />
      </section>
    </>
  );
}
export default Dashboard;
