import React, { useRef, useState } from "react";
import "./Add.css";

const Add = (props) => {
  const tache = useRef();
 // const [show, setShow] = useState(false);

  return (
    
    <div>

      <div className="title">
        <h1>ADD TODO</h1>
        <div className="input-group mb-3">

          <input
            type="text"
            className="form-control"
            placeholder="Write a task"
            ref={tache}
          />

          <button
            className="btn btn-outline-secondary"
            onClick={() => {

              if(tache.current.value === ''){

               alert('You should enter a valid task')
              } else{


              props.ajouter(tache.current.value);

              tache.current.value = "";

              }
              
            }}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
      </div>

  




    </div>
    
   
  );
};

export default Add;
