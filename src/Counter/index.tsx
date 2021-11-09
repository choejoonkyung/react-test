import react, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const clickPlusButton = () => setCounter((counter) => counter + 1);
  const clickMinusButton = () => setCounter((counter) => counter - 1);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button data-testid="minus-button" onClick={clickMinusButton}>
          -
        </button>
        <button data-testid="plus-button" onClick={clickPlusButton}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
