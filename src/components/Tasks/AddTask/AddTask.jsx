import React, { useContext, useState } from "react";
import { TaskContext } from "../../../context/TaskContext/TaskState";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("enviado",title);
    createTask(title)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Inserta el titulo"
          name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default AddTask;
