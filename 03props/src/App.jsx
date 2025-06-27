import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  let obj={
    title:["Firstnum","Second"],
    username:['aditya Website','Pinku Website']
  }

  return (
    <>
     <h1 className='bg-green-400'>Tailwind Test</h1>
     <Card username='aditya Website' title={obj.title[0]}/>
     <Card username='Pinku Website' title={obj.title[1]}/> 
    </>
  )
}

export default App
