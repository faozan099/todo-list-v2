import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./page/TodoList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
