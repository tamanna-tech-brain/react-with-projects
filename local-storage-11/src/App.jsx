import React from 'react'

const App = () => {
  // const user = {
  //  username: "tamanna",
  //  age:20,
  //  city: "bhopal"
  // }
  // console.log(user)
  // localStorage.setItem('user', JSON.stringify(user))  // for jason format
  // localStorage.getItem('user', (user))
  // localStorage.removeItem('user', (user))
  const user = JSON.parse(localStorage.getItem('user')) //for original format
  console.log(user)
  // console.log(typeof(user))


  return (
    <div>App</div>
  )
}

export default App