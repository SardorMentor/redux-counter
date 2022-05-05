import React, { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const reduxCounter = useSelector(state => state.counterReducer.counter);

  const addCode = "onClick={() => setCounter(counter + 1)}";
  const delCode = "onClick={() => setCounter(counter - 1)}";
  const resCode = "onClick={() => setCounter(0)}";

  return (
    <div className="Counter">
      <h1>Counter Component</h1>
      <pre>
        State: <code>const [counter, setCounter] = useState({counter});</code>
      </pre>
      <pre>
        Child: <code>None</code>
      </pre>
      <hr />
      <p>My counter is: {counter}</p>
      <p>Redux counter is: {reduxCounter}</p>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        ADD
      </button>
      <button className="btn" onClick={() => setCounter(counter - 1)}>
        DEL
      </button>
      <button className="btn" onClick={() => setCounter(0)}>
        RESET
      </button>
      <hr />
      <pre>
        ADD: <code>{addCode}</code>
      </pre>
      <pre>
        DEL: <code>{delCode}</code>
      </pre>
      <pre>
        RESET: <code>{resCode}</code>
      </pre>
      <hr />
    </div>
  );
};

export default Counter;
