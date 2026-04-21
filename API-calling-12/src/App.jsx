import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  // const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(data)
  // }
  


  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  //   const data = await response.json()
  //   console.log(data)
  // }

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }
  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
      {data.map(function(elem, idx){
      return <h3>hello{elem.author}</h3>
      })}
      </div>
    </div>
  )
}

export default App