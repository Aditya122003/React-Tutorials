import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// UseState Hook
// function App() {
//   let [count, setCount] = useState(0)

//   function Increment(){
//     console.log("Value Incremented")
//     setCount(count+1)
//   }
//   function Decrement(){
//     console.log("Value Decremented")
//     setCount(count-1)
//   }
//   return (
//     <>
//       <button onClick={Increment}>Increment +1</button>
//       <h1>The current count is : {count}</h1>
//       <button onClick={Decrement}>Decrement -1</button>
//     </>
//   )
// }



//  UseEffect Hook
// function App(){
//   let [count,setCount]=useState(0);
//   function Increse2sec()
//   {
//     if(count>=5)
//       {
//     setTimeout(()=>{
//       setCount(count+1)
//     },2000)
//     }
//   }
//    useEffect(callback,dependency array)
//   useEffect(Increse2sec,[count]) 
//  in dependency array we pass those arguments , on which we want to re-render the callback
//  Function
//   Before count=5 useeffect not run , after 5 as count changes useeffect renders each time

//   return(
//     <>
//     <button onClick={()=>setCount(count+1)}>Increment +1</button>
//      <h1>The current count is : {count}</h1>
//     <button onClick={()=>setCount(count-1)}>Decrement -1</button>

//     </>
//   )
// }



// UseRef Hook
// function App(){

//     const [value,setValue]=useState(0);
//     const count=useRef(0);
//     useEffect(()=>{
//         count.current=count.current+1;
//     })
//     console.log(count);
//     return(
//         <>
//         <button onClick={()=>setValue(prev=>prev+1)}>+1</button>
//         <h1>Value is {value}</h1>
//         <button onClick={()=>setValue(prev=>prev-1)}>-1</button>
//         <h1>Button Rendered : {count.current}</h1>
//         </>
//     )

    // When we use useRef then the variable on changing not leads to re render the Useeffect
    // unlike when we use useState variable. To get value of useRef variable we use .current
// }


// Using useRef Hook to access DOM element , It will print The value in text field to 
// console 
// function App()
// {
//     const inputEl=useRef();
//     function whenClicked(){
//         console.log(inputEl.current.value);
//         inputEl.current.style.background='grey'; // Change it to grey
//     }
//     return (
//         <>
//             <input type='text' ref={inputEl}></input>
//             <button onClick={whenClicked}>Click</button>
//         </>
//     )
// }



// Copy Value to Clipboard
// function App() {
//     const inputEl = useRef();

//     function whenClicked() {
//         const text = inputEl.current.value; // Get text from input
//         if (text.trim() === "") {
//             alert("Input box is empty. Please enter some text.");
//             return;
//         }

//         // Copy text to clipboard
//         navigator.clipboard.writeText(text)
//             .then(() => {
//                 // Change background color and show success message
//                 inputEl.current.style.background = "grey";
//                 alert("Text copied to clipboard: " + text);
//             })
//             .catch(err => {
//                 console.error("Failed to copy text: ", err);
//                 alert("Failed to copy text. Please try again.");
//             });
//     }

//     return (
//         <>
//             <input type="text" ref={inputEl} placeholder="Type something here..." />
//             <button onClick={whenClicked}>Copy to Clipboard</button>
//         </>
//     );
// }




export default App
