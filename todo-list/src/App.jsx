import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}} className="pt-3">Todo App</h1>
        <Todos />
        <DisplayTodos />
      </div>
    </>
  );
}

export default App;
