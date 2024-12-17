import React, { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext/TaskState";
import { Link } from "react-router-dom";

const Task = () => {
  const { tasks, getTasks, deleteTask } = useContext(TaskContext);

  //cuando cargue la página ejecutará la función getTasks
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <p>Tarea: {task.title}</p>
            <button onClick={() => deleteTask(task._id)}>X</button>
            <button>
              <Link to={"/editTask/"+task._id}>Editar</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
