import "./App.css";
import Add from "./Add/Add";
import Filter from "./Filter/Filter";
import TaskList from "./TaskList/TaskList";
import { useState } from "react";

function App(props) {

  // THE STATE OF THE LIST
  const [taskList, setTaskList] = useState([]);
  const [FilterTodo, setFilterTodo] = useState([]);
 

  // ADD A NEW TASK TO THE LIST

  const addTask = (task) => {

     let count = 0;

     if(taskList.length !== 0){

       var item = taskList[taskList.length-1];
       count = item.id;

     }
 
    setTaskList([...taskList,{ id: count+1, todo: task, status : false}]);
    setFilterTodo([...taskList,{ id : count+1, todo: task, status : false} ]);
  };

  //FILTER THE TODO LIST
  const filterTask = (tache) => {
   
    if(tache !== '') {
    setTaskList([...taskList.filter((task) => task.todo.toLowerCase().includes(tache.toLowerCase()))]);
  
    }else {

      setTaskList([...FilterTodo]);
    }
    

  };

  // DELETE A TASK FROM THE LIST
  const deleteTask = (id) => {

    setTaskList([...taskList.filter((task) => task.id !== id)]);
    setFilterTodo([...taskList]);
    
  };

  // DISPLAY THE WHOLE LIST AFTER DELETING THE FILTER
  
  


  return (

    <>

      <Add ajouter={addTask} />

      <hr />

      <Filter fil={filterTask}/>

      <TaskList list={taskList} deleteT={deleteTask} />
    </>
  );
}

export default App;
