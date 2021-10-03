import React, {useState} from "react";
import "./Task.css";

const Task = ({ item, remove}) => {
 
     const [classNam, setClassNam] = useState('');
   


  return (

    <>
      <div className="task">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <div className="hello">
            <div className ="sub">
          <input type="checkbox" id="scales" name="scales" onClick={() => {


             item.status = !item.status;

             item.status ? setClassNam('Dynamic') : setClassNam('');

          }}/>

            <h5 id="title" className = {classNam} > {item.todo} </h5>
           
            </div>

            <i class="fas fa-angle-down"></i>
            
              <i className="icon"
              onClick={() => {
              
                var r = window.confirm('Do you really want to delete the task') ;
 
                if (r === true) {
                remove(item.id);
                }

                

              }}class="fas fa-times"></i>
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
