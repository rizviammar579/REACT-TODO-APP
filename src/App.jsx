import { useState, useEffect, useRef } from 'react'
import './App.css'
import DisplayTodos from './components/DisplayTodos'

function App() {

  const [Edit, setEdit] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const index = useRef(JSON.parse(localStorage.getItem("index")) || 0)
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [input, setInput] = useState("")


  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const saveTodo = (e) => {
    if (input === "") { }
    else {
      const newTodo = { "index": index.current, "title": input, "isDone": false }
      const a = [...todos, newTodo]
      setTodos(a)
      index.current++
      localStorage.setItem("todos", JSON.stringify(a))
      localStorage.setItem("index", JSON.stringify(index.current))
      setInput("")
    }
  }

  const handleTick = (Index) => {
    let a = todos.map(todo => {
      return todo.index === Index ? { ...todo, isDone: !todo.isDone } : todo

    })
    setTodos(a)
    localStorage.setItem("todos", JSON.stringify(a))
  }

  const handleDelete = (Index) => {
    let a = todos.filter(todo => todo.index !== Index)
    for (let i = 0; i < a.length; i++) {
      a[i].index = i
    }

    index.current--
    localStorage.setItem("todos", JSON.stringify(a))
    localStorage.setItem("index", JSON.stringify(index.current))
    setTodos(a)
  }


  const handleEdit = (Index) => {
    let a = todos.map(todo => {
      return todo.index === Index ? edit(todo) : todo

    })
  }

  const edit = (todo) => {
    setInput(todo.title)
    setIsEditing(true);
    setEdit(todo.index)
  }

  const editbtn = () => {
    let a = todos.map(todo => {
      return todo.index === Edit ? { ...todo, title: input } : todo

    })
    setTodos(a)
    setIsEditing(false)
    setInput("")
    localStorage.setItem("todos", JSON.stringify(a))
  }




  return (
    <>
      <div className='flex flex-col justify-start bx:justify-center items-center gap-7 w-[100vw] cx:w-[80vw] p-5'>

        <div className='flex flex-col gap-10 justify-start cx:justify-center bx:items-center'>

          <h1 className='font-extrabold text-6xl bx:items-center'>Your Todo App</h1>
          <h3 className='font-bold text-1xl text-amber-900 mb-10'>Manage all your tasks at one place</h3>

        </div>

        <div className='flex flex-col bx:flex-row gap-5 w-[100%] justify-center items-center'>

          <input className='bg-white rounded-full font-bold text-black w-[90vw] bx:w-[60%] p-2' type="text" placeholder='Add a task' value={input} onChange={handleInput} />

          {!isEditing && <button className='p-2 pr-10 pl-10 bg-amber-900 text-white rounded-full  w-[100px] bx:w-fit' onClick={saveTodo}>Add</button>}

          {isEditing && <button className='p-2 w-[100px] bx:w-fit pr-10 pl-10 bg-amber-900 text-white rounded-full' onClick={editbtn}>Edit</button>}

        </div>

        <div className='flex flex-col justify-start w-[80vw] ax:w-[60vw] mt-10 mb-20 gap-5'>

          {todos.map(todo => {

            return <DisplayTodos handleTick={handleTick} handleDelete={handleDelete} handleEdit={handleEdit} key={todo.index} todo={todo} />

          })}

        </div>

      </div>



    </>
  )
}

export default App
