import React, { useState } from 'react'

const PersonCard = (props) => {
  const [addAge, setAddAge ] = useState (props.initialAddAge)
  return (
    <div>
    <h2>{props.title}</h2>
 <p>Age: {addAge} </p>
    <p>{props.detail}</p>
    <button onClick={ (event) => setAddAge(addAge + 1)}> Button for {props.title}</button>
 
    
    </div>
  )
}

export default PersonCard