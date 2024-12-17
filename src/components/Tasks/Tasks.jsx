import React from 'react'
import Task from './Task/Task'
import AddTask from './AddTask/AddTask'

const Tasks = () => {
  return (
    <div>Tasks
        <AddTask/>
        {/* Nos importamos el componente Task que pintará cada tarea */}
        <Task/>
    </div>
  )
}

export default Tasks