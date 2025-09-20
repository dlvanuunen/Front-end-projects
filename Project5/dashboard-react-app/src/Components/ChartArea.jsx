import { useState } from "react";
import { useEffect, useRef } from "react";
import Bars from "./Chartparts/Bars";
import Axes from "./Chartparts/Axes";

import * as d3 from "d3";


    const initialData = [
    { value: NaN, timestamp_measured: "2025-09-17T12:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T11:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T10:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T08:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T09:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T07:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T09:00:00+00:00", formula: "PM10" },
    { value: NaN, timestamp_measured: "2025-09-17T12:00:00+00:00", formula: "PM25" },
    { value: NaN, timestamp_measured: "2025-09-17T11:00:00+00:00", formula: "PM25" },
    { value: NaN, timestamp_measured: "2025-09-17T10:00:00+00:00", formula: "PM25" },
    { value: NaN, timestamp_measured: "2025-09-17T09:00:00+00:00", formula: "PM25" },
  ];
  

function ChartArea({ measurement, formula }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(200);


  // const data = [
  //   { x: 1, y: 4 },
  //   { x: 2, y: 16 },
  //   { x: 3, y: 32 },
  // ];


  const data = (measurement || initialData).map(d => ({
  x: new Date(d.timestamp_measured), // convert ISO string to JS Date
  y: d.value,
  formula: d.formula,                // keep extra info if needed
}));

  console.log(data)


  const area = {
    margin: {
      top: 20,
      right: 20,
      bottom: 40,
      left: 80,
    },
  };
  const axis = {
    margin: {
      xaxis: 13,
      yaxis: 10,
      xlabel: 20,
      ylabel: 20,
    },
    tickCount: {
      x: 10,
      y: 5,
    },
  };
  const theme = {
    background_color: "white",
    chartarea_color: "white",
    axis: {
      color: "black",
      stroke: "rgba(0, 0, 0, 1)",
      stroke_width: 1,
    },
  };

  const config = { area: area, axis: axis, theme: theme };
  
  let chartarea_width = width - area.margin.left - area.margin.right;
  let chartarea_height = height - area.margin.top - area.margin.bottom;

  // const xScale = d3
  //   .scaleLinear()
  //   .domain([0, d3.max(data, (d) => d.x)])
  //   .range([0, chartarea_width]);


  const xScale = d3.scaleTime()
  .domain(d3.extent(data, d => d.x)) // min/max timestamps
  .range([0, chartarea_width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([chartarea_height, 0]);

  const xTicks = xScale.ticks();
  const yTicks = yScale.ticks(5);

  return (
    <>
      <p> Placeholder</p>
      <div className="chart-container" ref={containerRef}>
        <svg className="chart-svg" width={width} height={height}>
             
          <rect width={width} height={height} fill={theme.background_color} />
           <clipPath id="chart-area-clip"></clipPath>

          {/*Start Plot Area */}
          <g transform={`translate(${area.margin.left}, ${area.margin.top})`} >
            <rect
              width={chartarea_width}
              height={chartarea_height}
              fill={theme.chartarea_color}
            />{" "}
            {/* Data points mapping */}
            <Bars clipPath="url(#chart-area-clip)"
              data={data}
              xScale={xScale}
              yScale={yScale}
              height={chartarea_height}
              width={chartarea_width}
            />
            <Axes
              xScale={xScale}
              yScale={yScale}
              xTicks={xTicks}
              yTicks={yTicks}
              height={chartarea_height}
              width={chartarea_width}
              config={config}
            ></Axes>
            {/*End Plot Area */}
          </g>
        </svg>
      </div>
    </>
  );
}

export default ChartArea;

//    useEffect(() => {
//   if (!containerRef.current || !data2) return;

//   const filteredData = filterByCompound(data2, formula)
//     .map(d => ({
//       ...d,
//       timestamp: new Date(d.timestamp_measured),
//     }))
//     .sort((a, b) => a.timestamp - b.timestamp);

//   const observer = new ResizeObserver((entries) => {
//     const newWidth = entries[0].contentRect.width;
//     setWidth(newWidth);

//     setHeight(newHeight);
//   });
//  const newHeight = Math.min(
//   newWidth * (1 - 0.4 * Math.min(1, newWidth / 1000)),
//   400
// );

//   observer.observe(containerRef.current);
//   return () => observer.disconnect();
// }, []);
