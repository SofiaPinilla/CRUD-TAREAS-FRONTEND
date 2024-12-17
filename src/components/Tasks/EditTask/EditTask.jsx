import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../../context/TaskContext/TaskState";

const EditTask = () => {
  const { getTaskById, taskById, editTaskById } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const { _id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getTaskById(_id);
    console.log(taskById);
  }, []);

  useEffect(() => {
    setTitle(taskById.title);
  }, [taskById.title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("editado");
    await editTaskById(_id, title);
    navigate("/");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Inserta el titulo"
          name="title"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default EditTask;
