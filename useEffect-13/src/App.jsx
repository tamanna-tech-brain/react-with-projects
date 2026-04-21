import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
   
  function aChanging(){
    console.log(' a value change')
  }
  function bChanging(){
    console.log('b value is changing')
  }
  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
  },[b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}>change A</button>

      <button
      onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}








// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//    console.log('useEffect is running')
//   },[num])

//   return (
//     <div>
//       <h1> num is{num}</h1>
//       <h2> num2 is {num2}</h2>
//       <button 
//       onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2 + 10)
//       }}>Hover</button>
//     </div>
//   )
// }

export default App