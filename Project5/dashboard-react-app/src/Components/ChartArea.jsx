import { useState } from "react";

import * as d3 from "d3"


function ChartArea(){


const data = [{x: 1, y:4}, {x:2, y: 16}, {x:3, y:32}]


const area = {
    margin:{
    top: 20,
    right: 20,
    bottom: 40,
    left: 40}
  };
  const axis = {
    margin: {
      xaxis: 13,
      yaxis: 13,
      xlabel: 20,
      ylabel: 20,
    },
    tickCount: {
      x: 10,
      y: 5,
    }
  };
  const theme = {
    background_color: "burgundy",
    chartarea_color: "grey",
    axis: {
      color: "black",
      stroke: "rgba(0, 0, 0, 1)",
      stroke_width: 1,
    },
  };

const config = {area:area, axis:axis, theme:theme}


let width = 400
let height = 400


let chartarea_width = (width - area.margin.left - area.margin.right);
let chartarea_height = (height-area.margin.top-area.margin.bottom);

console.log(chartarea_height)



    return(
<>

<p> Placeholder</p>
<div className="graph-container" style={{width: "100%", height: "500px"}}>
<svg className="graph-svg"  >
<rect
  width={width}
  height={height}
  fill={theme.background_color}
  />
 <g transform={`translate(${area.margin.left}, ${area.margin.top})`}>
  <rect
  width={chartarea_width}
  height={chartarea_height}
  fill={theme.chartarea_color}
  />   </g>

</svg>
</div>
</>


    )

}


export default ChartArea