import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Message from './components/Message'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <h1> React super simple app </h1> 
      <Counter/>
 

      </div>
      <div className='margin-top'>

             <Message />
      </div>
      
    </>
  )
}

export default App
