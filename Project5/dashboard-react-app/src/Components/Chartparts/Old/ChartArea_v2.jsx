import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

// Filter function
function filterByCompound(data, compound) {
  return data.filter(item => item.formula === compound);
}

// Minimal working line chart component
function ChartArea({ formula }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);

  // Test data
  const testData = [
    { value: 2.9, timestamp_measured: "2025-09-17T12:00:00+00:00", formula: "PM10" },
    { value: 6.5, timestamp_measured: "2025-09-17T11:00:00+00:00", formula: "PM10" },
    { value: 10.5, timestamp_measured: "2025-09-17T10:00:00+00:00", formula: "PM10" },
    { value: 22.8, timestamp_measured: "2025-09-17T09:00:00+00:00", formula: "PM10" },
    { value: 4.4, timestamp_measured: "2025-09-17T12:00:00+00:00", formula: "PM25" },
    { value: 3.3, timestamp_measured: "2025-09-17T11:00:00+00:00", formula: "PM25" },
    { value: 8.3, timestamp_measured: "2025-09-17T10:00:00+00:00", formula: "PM25" },
    { value: 8.9, timestamp_measured: "2025-09-17T09:00:00+00:00", formula: "PM25" },
  ];

  // Handle resizing
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      setWidth(newWidth);
      setHeight(Math.min(newWidth * 0.6, 400));
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Draw chart with D3
  useEffect(() => {
    if (!svgRef.current) return;

    const margin = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // clear previous chart

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Filter and sort data
    const filteredData = filterByCompound(testData, formula)
      .map(d => ({ ...d, timestamp: new Date(d.timestamp_measured) }))
      .sort((a, b) => a.timestamp - b.timestamp);

    if (filteredData.length === 0) return;

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

    // Axes
    const xAxis = d3.axisBottom(xScale).ticks(4).tickFormat(d3.timeFormat("%H:%M"));
    const yAxis = d3.axisLeft(yScale).ticks(5);

    chart.append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis);

    chart.append("g").call(yAxis);

    // Line generator
    const lineGenerator = d3
      .line()
      .x(d => xScale(d.timestamp))
      .y(d => yScale(d.value));

    chart.append("path")
      .datum(filteredData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

  }, [width, height, formula]);

  return (<>
    <div ref={containerRef} style={{ width: "100%", border: "1px solid black" }}>
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
    </>
  );
}
export default ChartArea
// Example usage

