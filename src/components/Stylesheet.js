import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className= props.truthy ? 'primary' : ' ';
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
