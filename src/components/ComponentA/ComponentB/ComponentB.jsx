import React from "react";
import { useDispatch } from "react-redux";
import { addNum, delNum, resNum } from "../../../redux/actions/actionReducer";

const ComponentB = () => {
  const dispatch = useDispatch();

  const addCode = "None";
  const delCode = "None";
  const resCode = "None";

  return (
    <div className="ComponentB">
      <h1>ComponentB</h1>
      <pre>
        State: <code>None</code>
      </pre>
      <pre>
        Child: <code>None</code>
      </pre>
      <button className="btn" onClick={() => dispatch(addNum())}>
        ADD
      </button>
      <button className="btn" onClick={() => dispatch(delNum())}>
        DEL
      </button>
      <button className="btn" onClick={() => dispatch(resNum())}>
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

export default ComponentB;
