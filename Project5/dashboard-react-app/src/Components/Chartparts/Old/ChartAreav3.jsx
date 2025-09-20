import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function filterByCompound(data, compound) {
  return data.filter(item => item.formula === compound);
}

function ChartArea({ testData = [], formula }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(300);
  const [filteredData, setFilteredData] = useState([]);

  // Update filteredData whenever testData or formula changes
  useEffect(() => {
    if (!testData || testData.length === 0) {
      setFilteredData([]);
      return;
    }
    const fd = filterByCompound(testData, formula)
      .map(d => ({ ...d, timestamp: new Date(d.timestamp_measured) }))
      .sort((a, b) => a.timestamp - b.timestamp);
    setFilteredData(fd);
  }, [testData, formula]);

  // Optional: responsive width/height
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(entries => {
      const newWidth = entries[0].contentRect.width;
      setWidth(newWidth);
      setHeight(Math.min(newWidth * 0.5, 400));
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (filteredData.length === 0) return <div>Loading chart...</div>;

  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(filteredData, d => d.timestamp))
    .range([0, chartWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(filteredData, d => d.value)])
    .range([chartHeight, 0])
    .nice();

  const lineGenerator = d3
    .line()
    .x(d => xScale(d.timestamp))
    .y(d => yScale(d.value));

  return (
    <div ref={containerRef}>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <rect width={chartWidth} height={chartHeight} fill="#f0f0f0" />

          {/* Line */}
          <path
            d={lineGenerator(filteredData)}
            fill="none"
            stroke="steelblue"
            strokeWidth={2}
          />

          {/* Circles */}
          {filteredData.map((d, i) => (
            <circle
              key={i}
              cx={xScale(d.timestamp)}
              cy={yScale(d.value)}
              r={4}
              fill="red"
            />
          ))}

          {/* X axis */}
          <g transform={`translate(0, ${chartHeight})`}>
            {xScale.ticks(4).map((tick, i) => (
              <g key={i} transform={`translate(${xScale(tick)},0)`}>
                <line y2={6} stroke="black" />
                <text y={20} textAnchor="middle" fontSize={10}>
                  {d3.timeFormat("%H:%M")(tick)}
                </text>
              </g>
            ))}
          </g>

          {/* Y axis */}
          <g>
            {yScale.ticks(5).map((tick, i) => (
              <g key={i} transform={`translate(0,${yScale(tick)})`}>
                <line x2={-6} stroke="black" />
                <text x={-10} y={4} textAnchor="end" fontSize={10}>
                  {tick}
                </text>
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ChartArea;
