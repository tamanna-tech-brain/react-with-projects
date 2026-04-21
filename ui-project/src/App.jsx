import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {

  const users = [
    {img:"https://watermark.lovepik.com/photo/20211201/large/lovepik-business-woman-professional-image-picture_501302145.jpg " , intro: "", tag:"satisfied" },
    {img:"https://tse4.mm.bing.net/th/id/OIP.ssxa8e5Re2qCwKiPRra3ZAHaEu?rs=1&pid=ImgDetMain&o=7&rm=3 " , intro: "", tag:"underserved" },
    {img:"https://3.bp.blogspot.com/-gTSnsowWIUM/UOJG9ABSZkI/AAAAAAAADeM/S4Hg32BANT4/s1600/business+woman.jpg " , intro: "", tag:"underbanned" }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
