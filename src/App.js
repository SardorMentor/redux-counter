import React from "react";
import Counter from "./components/Counter/Counter";
import GlobalState from "./components/GlobalState/GlobalState";
import ComponentA from "./components/ComponentA/ComponentA";

const App = () => {
  return (
    <div className="app">
      <h1>App Component</h1>
      <pre>
        State: <code>None</code>
      </pre>
      <pre>
        Child: <code>Counter, GlobalState, ComponentA</code>
      </pre>
      <div className="wrapper">
        <Counter />
        <GlobalState />
        <ComponentA />
      </div>
    </div>
  );
};

export default App;
