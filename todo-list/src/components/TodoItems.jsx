import React, { useRef, useEffect } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completedTodos } = props;
  const inputRef = useRef(null);

  const changeFocus = () => {
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      if (inputRef.current) {
        updateTodo({ id, item: inputRef.current.value });
        inputRef.current.disabled = true;
      }
    }
  };

  useEffect(() => {
    // Mengecek apakah elemen input ada, jika tidak maka menginisialisasinya
    if (inputRef.current) {
      inputRef.current.disabled = true;
    }
  }, [item]); // Hanya berlaku saat item berubah

  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-center align-items-center gap-3">
        {item.completed ? <button className="btn btn-success">Done</button> :
        <button className="btn btn-danger">Not</button>}
        <div>
          <li key={item.id} style={{ listStyle: "none" }}>
            <input
              ref={inputRef}
              disabled={inputRef}
              defaultValue={item.item}
              style={{ width: "280px", padding: "0.5rem", fontSize: "20px", borderRadius:"10px", border: "none"}}
              onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            />
          </li>
        </div>
        <div className="d-flex gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
              onClick={() => changeFocus()}
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </div>
          <div>
            {item.completed === false && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
                onClick={() => completedTodos(item.id)}
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            )}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
              onClick={() => removeTodo(item.id)}
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </div>
        </div>
      </div>
      <hr style={{margin:"auto", marginTop:"1rem"}} className="container"/>
    </div>
  );
};

export default TodoItem;
