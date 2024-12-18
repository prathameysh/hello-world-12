import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'HELLO'
      }
      this.clickHandler = this.clickHandler.bind(this) //*Constructor Approach
    }

    

    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
        
    // }

    // Arrow fn as Class Property
    clickHandler=()=> { 
        this.setState({
            message: 'GoodBye!'
        })
        
    }
    

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/*The Bind keyword Methodd */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button>*/} {/* Arrow fn approach */}
        <button onClick={this.clickHandler}>Click</button> {/*Constructor Approach and Arrow fn as Class Property*/}
      </div>
    )
  }
}

export default EventBind
