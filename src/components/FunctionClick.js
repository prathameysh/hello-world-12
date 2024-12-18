//* Event handling 
import React from 'react'

function buttonClicked()
{
    console.log('button clicked')
}

function FunctionClick() {
  return (
    <div>
        <button onClick= {buttonClicked}>Click</button>
    </div>
  )
}

export default FunctionClick
