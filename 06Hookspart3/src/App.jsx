import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fx1 from './Component1'
function App() {
  const [count, setCount] = useState(0)
  // const newfxn=()=>{}
    const newfxn=useCallback(()=>{},[])

  return (
    <>
      <Fx1 functionname={newfxn}></Fx1> 
      <h1>Counter is {count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Click Me</button>
    </>
  )
}

export default App
// Using React.memo leads to no re-render when other things or component changes but when 
// some props are passing through it , then we use useCallback(fxn,dependancy array) to memorise it.
