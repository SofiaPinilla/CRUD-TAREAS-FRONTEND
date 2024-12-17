import React, { createContext, useReducer } from "react";
import axios from "axios";
import TaskReducer from "./TaskReducer";

const initialState = {
  tasks: [],
  taskById:{}
};

export const TaskContext = createContext(initialState);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:8080/tasks");

    console.log(res.data)
    dispatch({
      type: "GET_TASKS",
      payload: res.data,
    });
  };

  const deleteTask =async(id)=>{
    await axios.delete("http://localhost:8080/tasks/"+id)
    console.log("destruido")
    // getTasks()
    dispatch({
        type:"DELETE_TASK",
        payload:id
    })
  }
  const createTask =async(title)=>{
   const res = await axios.post("http://localhost:8080/tasks/",{title})
    // getTasks()
    dispatch({
        type:"CREATE_TASK",
        payload:res.data.task
    })
  }

  const getTaskById =async(id)=>{
    const res = await axios.get("http://localhost:8080/tasks/"+id)

    dispatch({
        type:"GET_TASK_BY_ID",
        payload:res.data
    })
  }

  const editTaskById =async(id,title)=>{
    return await axios.put("http://localhost:8080/tasks/update/"+id,{title})
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskById: state.taskById,
        getTasks,
        deleteTask,
        createTask,
        getTaskById,
        editTaskById
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
