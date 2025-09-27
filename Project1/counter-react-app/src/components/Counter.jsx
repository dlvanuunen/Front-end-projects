import { useState } from "react";

function Counter() {
  const [count, updateCount] = useState(0);

  const handleOnClickIncrease = () => {
    console.log("Increase clicked");
    updateCount(count + 1);
    // Updates state and triggers re-render
  };

  const handleOnClickDecrease = () => {
    console.log("Decrease clicked");
    updateCount(count - 1);
    // Updates state and triggers re-render
  };

  return (
    <>
      <p className="counter">The button has been clicked {count} times</p>

      <button onClick={handleOnClickIncrease}>Click here!</button>

      <button onClick={handleOnClickDecrease}>Subtract</button>
    </>
  );
}

export default Counter;
