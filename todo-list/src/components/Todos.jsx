import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const trimmedInput = todo.trim();

  const add = () => {
    if (trimmedInput === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
    }
    setTodo("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center gap-2 pt-5">
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="form-control"
          id="todos"
          style={{ width: "300px" }}
        />
      </div>
      <button className="btn btn-primary" onClick={() => add()}>
        Add
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
