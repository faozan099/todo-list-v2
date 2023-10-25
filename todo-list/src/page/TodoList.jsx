import React from 'react'
import Todos from '../components/Todos'
import DisplayTodos from '../components/DisplayTodos'

function TodoList() {
  return (
    <div>
        <h1 style={{textAlign: "center"}} className="pt-5">Todo App</h1>
        <Todos />
        <DisplayTodos />
      </div>
  )
}

export default TodoList
