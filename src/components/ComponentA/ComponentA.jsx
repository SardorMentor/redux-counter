import React from "react";
import ComponentB from "./ComponentB/ComponentB";

const ComponentA = () => {
  return (
    <div className="ComponentA">
      <h1>ComponentA</h1>
      <pre>
        State: <code>None</code>
      </pre>
      <pre>
        Child: <code>ComponentB</code>
      </pre>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
