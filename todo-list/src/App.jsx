import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <>
      <Todos />
      <DisplayTodos />
    </>
  );
}

export default App;
