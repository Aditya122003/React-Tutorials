import { useState } from 'react'

function App() {
  let [counter, setcounter] = useState(10)
 
  let Addcounterer=()=>{
    if(counter<21)
    {
      counter=counter+1;
      setcounter(counter);
      setcounter(counter);
      setcounter(counter);
      setcounter(counter);
      // if we use a lot of setcounter it does not increase value by 4 , it is incremented 
      // same as earlier by 1 because useState works in batches when it see same work 
      //done again and again then it treats as only one thing to do....but if we use 
      // callback in setcounter and fetch value as prevcounter then it will increase by 4 by
      //just one click
      // setcounter(prevcounter=>prevcounter+1)
      // setcounter(prevcounter=>prevcounter+1)
      // setcounter(prevcounter=>prevcounter+1)
      // setcounter(prevcounter=>prevcounter+1)
      // Above code increase value by 4 by just one click.
    }
    
  }
 
  let Reducecounterer=()=>{
    if(counter>=1)
    {
    counter=counter-1;
    setcounter(counter);
    }
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <button onClick={Addcounterer}>Add Value {counter}</button>
     <br></br>
     <button onClick={Reducecounterer} >Decrease Value {counter}</button>
    </>
  )
}

export default App

/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */
