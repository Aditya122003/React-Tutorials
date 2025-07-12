import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { number } from 'joi'
  
// useMemo Hook-using this we cache the value , so whenever we need we have not to re-render
// the whole page , as if on buttonclick count change it render the whole component and it
// again calculates cube value but if we use useMemo hook then it not need to re-render that
// component when counter changes.
// useMemo(callback fxn , dependency array)
function App() {
  const [val,setVal]=useState(0)
  const [count, setCount] = useState(0)

  function cubecal(num)
  {
    console.log("Calculation Done")
     return Math.pow(num,3)
  }

  // const res=cubecal(val)
  const res=useMemo(()=>{
    return cubecal(val)
  },[val])

  return (
    <>
    <input type='number' value={val} onChange={(e)=>setVal(e.target.value)}></input>
    <h1>Cube of Value is {res}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>+1</button>
    <h1>Counter is increased by {count}</h1>
    </>
  )
}

export default App
