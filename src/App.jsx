import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  function handleTask(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks]
      const temp = updatedTasks[index - 1]
      updatedTasks[index - 1] = updatedTasks[index]
      updatedTasks[index] = temp
      setTasks(updatedTasks)
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]
      const temp = updatedTasks[index + 1]
      updatedTasks[index + 1] = updatedTasks[index]
      updatedTasks[index] = temp
      setTasks(updatedTasks)
    }
  }

  return (
    <>
      <div className='taskmanager'>
        <h1>Task Manager</h1>
        <input
          id='t'
          className='task'
          type='text'
          placeholder='Enter a Task..'
          value={newTask}
          onChange={handleTask}
        />
        <button className='add-but' onClick={addTask}>Add</button>
        <ol>
          {tasks.map((task, index) =>
            <li key={index}>
              <span className='text'>{task}</span>
              <button className='delete-but' onClick={() => deleteTask(index)}>Delete</button>
              <button className='up-but' onClick={() => moveUp(index)}>Up</button>
              <button className='down-but' onClick={() => moveDown(index)}>Down</button>
            </li>
          )}
        </ol>
      </div>
    </>
  )
}

export default App
