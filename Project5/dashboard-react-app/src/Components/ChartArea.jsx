import { useState } from "react";
import { useEffect, useRef } from "react";
import * as d3 from "d3"


function ChartArea({data2}){
  const containerRef = useRef(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

    useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      setWidth(newWidth);

      // replicate your Svelte formula
      const newHeight = Math.min(
        newWidth * (1 - 0.4 * Math.min(1, newWidth / 1000)),
        400
      );
      setHeight(newHeight);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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



let chartarea_width = (width - area.margin.left - area.margin.right);
let chartarea_height = (height-area.margin.top-area.margin.bottom);




    return(
<>

<p> Placeholder</p>
<div className="graph-container" ref={containerRef} >
<svg className="graph-svg" width={width} height={height}  >
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
   {data.map((d, i) => (
        <rect
          key={i}
          x={d.x}
          y={d.y} // initial position (React renders)
          width={10}
          height={height - d.y}
          fill="steelblue"
        />
      ))}
</svg>
</div>
</>


    )

}


export default ChartArea