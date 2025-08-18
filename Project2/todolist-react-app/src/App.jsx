import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>To do list app</h1>
 
      <p> This is a simple to do list app without styling </p>

      <ToDoList/>
        

   
    </>
  )
}

export default App
