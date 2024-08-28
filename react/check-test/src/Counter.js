import { React, useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="countDiv">
      <p>You clicked {count} times</p>
      <button className="countButton" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="countButton" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
export default Counter;
