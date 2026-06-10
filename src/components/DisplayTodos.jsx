import React from 'react'

const DisplayTodos = ({ todo, handleTick, handleDelete, handleEdit }) => {
  return (

    <div className='text-black flex justify-between gap-5'>

      <div className='flex gap-3 w-[50vw]'>
        <span className='text-amber-900 font-bold'>{`${todo.index + 1}.`}</span>
        <span className={todo.isDone ? "line-through font-bold" : "font-bold"}>{todo.title}</span>
      </div>

      <div className='flex gap-3'>

        <button className='' onClick={() => { handleEdit(todo.index) }}>

          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#78350F"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>

        </button>

        <button onClick={() => { handleTick(todo.index) }}>

          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#78350F"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>

        </button>

        <button className='' onClick={() => { handleDelete(todo.index) }}>

          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#78350F"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>

        </button>

      </div>

    </div>
  )
}

export default DisplayTodos
