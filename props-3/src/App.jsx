import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='aman' age={18} img='https://th.bing.com/th/id/OIP.qEbyMYEXYOHc5zXd2RPX3wHaGL?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'/>
      <Card user='kriti' age={19} img='https://th.bing.com/th/id/OIP.WF2ASOBPwpq9r1CxEHdxcgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'/>

    </div>
  )
}

export default App
