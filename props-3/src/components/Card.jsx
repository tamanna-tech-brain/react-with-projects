import React from 'react'

const Card = (props) => {

    console.log(props);
  return (
     <div className='card'>
        <img src={props.img} alt='' />
        <h1>{props.user},{props.age}</h1>
        <p>lorem fyregherh erhig heguie hgiurjehogi jjhjegieruh hiugeio efhifwj wkw owkwk nvuijieo  </p>
        <button> view profile </button>
      </div>
  )
}

export default Card