import React, { useRef } from "react";
import "./Filter.css";

const Filter = ({ fil }) => {
  const item = useRef();

  return (
    <div>
      <div className="Filter">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Find a task"
            ref={item}
            onChange={() => fil(item.current.value)}
          ></input>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
