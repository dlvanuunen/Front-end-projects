import { timeFormat } from "d3-time-format";

const formatDate = timeFormat("%H:%M"); // hours:minutes

function Axes({xScale, yScale, xTicks, yTicks, height,width, config}){

    


return <>


{/* X-Axis */}

<g>
  {xTicks.map((tick, index) => 
    <text key={index}
      x={xScale(tick)}
      y={height}
      fill={config.axis.color}
      dy={config.axis.margin.xaxis + 2}
      textAnchor="middle"
      dominantBaseline="middle"
    >
        {formatDate(tick)}
    </text> 

)

}
  <line
    x1="0"
    y1={height}
    x2={width + 0.35}
    y2={height}
    style={{ stroke: config.theme.axis.stroke, strokeWidth: config.theme.axis.stroke_width }}
  
></line>
</g>


{/* Y-Axis */}
<g>
  {yTicks.map((tick, index) => 
    <text key={index}
      y={yScale(tick)}
      x={0}
      fill={config.axis.color}
      dx={-config.axis.margin.yaxis}
      textAnchor="end"
      dominantBaseline="middle"
    >
      {tick}
    </text> )
}


  <line
    x1="0"
    y1={-.5}
    x2="0"
    y2={height}
    style={{ stroke: config.theme.axis.stroke, strokeWidth: config.theme.axis.stroke_width }}
  
></line>



</g>


</>
}


export default Axes


