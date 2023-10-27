import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from '../page/TodoList'

function Url() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoList/>}/>
      </Routes>
    </>
  )
}

export default Url
