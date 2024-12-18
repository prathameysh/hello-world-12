import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {


  render() {
    const { name,count,incrementCount }= this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name } hovered { count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
