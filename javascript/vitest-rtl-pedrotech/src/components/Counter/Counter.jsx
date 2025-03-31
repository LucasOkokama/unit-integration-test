import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={decrement} style={{ marginRight: 16 }}>
        Decrement
      </button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
