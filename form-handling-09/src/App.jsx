import React from 'react'
 
const submitHandler = (e)=>{
  e.preventDefault()
  console.log('Form submitted');
}
const App = () => {
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name'/>
        <button >submit</button>
      </form>
    </div>
  )
}

export default App