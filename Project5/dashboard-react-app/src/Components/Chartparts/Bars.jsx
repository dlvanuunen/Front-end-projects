import React, { useEffect, useRef } from "react";
import { useSprings, animated } from "@react-spring/web";

function Bars({ data, xScale, yScale, height }) {
  // Keep previous data length to reset bars
  const prevDataRef = useRef(data.map(d => d.y));

  // Create a spring for each bar
  const [springs, api] = useSprings(data.length, i => ({
    from: { height: 0 },
    height: height - yScale(data[i].y),
    config: { tension: 500, friction: 55 },
  }));

  // On data update: collapse then grow
  useEffect(() => {
    api.start(index => ({
      height: 0, // collapse first
      onRest: () => {
        api.start(i => ({
          height: height - yScale(data[i].y), // grow to new value
        }));
      },
    }));
    prevDataRef.current = data.map(d => d.y);
  }, [data, api, height, yScale]);

  return (
    <>
      {springs.map((props, i) => {
        const d = data[i];
        const barX = xScale(d.x);
        const barWidth = xScale.bandwidth ? xScale.bandwidth() : 7.5;
        return (
          <animated.rect
            key={i}
            x={barX}
            width={barWidth}
            y={props.height.to(h => height - h)} // always grow from bottom
            height={props.height}
            fill="steelblue"
          />
        );
      })}
    </>
  );
}

export default Bars;
