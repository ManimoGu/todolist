import React from 'react'
import Task from '../task/Task'

const TaskList = ({list, deleteT }) => {

    return (

        <div>
             {list.map((task) => (

            <Task item={task} remove = {deleteT} stylist ={styling}/>

            ))}
            
        </div>
    )
}

export default TaskList
