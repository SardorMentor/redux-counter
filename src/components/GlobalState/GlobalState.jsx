import React from "react";
import { useSelector } from "react-redux";

const GlobalState = () => {
  const counter = useSelector(state => state.counterReducer.counter);

  const counterCode = `Redux counter: { counter: ${counter} }`;

  return (
    <div className="GlobalState">
      <pre style={{ color: "red", fontSize: "24px" }}>GlobalState</pre>
      <pre>
        State:
        <br />
        <code>{counterCode}</code>
      </pre>
    </div>
  );
};

export default GlobalState;
