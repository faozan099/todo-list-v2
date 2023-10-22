import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completedTodos,
} from "../redux/reducer";
import TodoItems from "./TodoItems";

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

function DisplayTodos(props) {
  const [sort, setSort] = useState("active");
  return (
    <div className="displayTodos">
      <div className="button">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {
          props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItems
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completedTodos={props.completedTodos}
                    />
                  )
                );
              })
            : null
          // untuk completed items
        }
        {
          props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItems
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completedTodos={props.completedTodos}
                    />
                  )
                );
              })
            : null
          // untuk completed items
        }
        {
          props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItems
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodos={props.completedTodos}
                  />
                );
              })
            : null
          // untuk completed items
        }
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
