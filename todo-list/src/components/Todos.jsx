import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completedTodos,
} from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completedTodos: (id) => dispatch(completedTodos(id)),
  };
};

function Todos(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  //   console.log("props from store", props);
  return (
    <div className="addTodo">
      <input
        type="text"
        className="todo-input"
        onChange={(e) => handleChange(e)}
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />

      {/* <ul>
        {props.todos.map((item) => {
          return (
            // <li key={item.id}>
            //   <textarea
            //     ref={inputRef}
            //     disabled={inputRef}
            //     defaultValue={item.item}
            //     onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            //   />
            //   <button onClick={() => props.removeTodo(item.id)}>Delete</button>
            //   <button onClick={() => changeFocus()}>edit</button>
            //   <button onClick={() => props.completedTodos(item.id)}>Completed</button>
            // </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
