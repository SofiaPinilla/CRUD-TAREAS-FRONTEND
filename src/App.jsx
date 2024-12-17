import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import { TaskProvider } from "./context/TaskContext/TaskState";
import EditTask from "./components/Tasks/EditTask/EditTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <TaskProvider>
          {/* Tasks es hijo del proveedor */}
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/editTask/:_id" element={<EditTask />} />
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
