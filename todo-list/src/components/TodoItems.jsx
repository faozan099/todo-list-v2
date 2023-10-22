import React, { useRef } from "react";

function TodoItems(props) {
  const { item, updateTodo, removeTodo, completedTodos } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disable = true;
    }
  };
  return (
    <li key={item.id} className="cards">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
      <button onClick={() => removeTodo(item.id)}>Delete</button>
      <button onClick={() => changeFocus()}>edit</button>
      <button onClick={() => completedTodos(item.id)}>Completed</button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
}

export default TodoItems;
