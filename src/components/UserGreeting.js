import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  
  render() {

      //*Short Circuit Operator

      //*Ternary Conditional Opearator
      return(
        this.state.isLoggedIn ? <div>Welcome Prat</div> : <div>Welcome Guest</div>
      )

      //*Element variables
      // let message
      // if(this.state.isLoggedIn) {
      //   message= <div>Welcome Prat</div>
      // }
      // else{
      //   message=<div>Welcome Guest</div>
      // }
      // return <div>{message}</div>

      //*if-else
      // if(this.state.isLoggedIn) {
      //   return (<div>Welcome Vishwas</div>)
      // }
      // else {
      //   return (<div>Welcome Guest</div>)
      // }


    // return (
    //   <>
    //     <div>Welcome Prat</div>
    //     <div>Welcome Guests</div>
    //   </>
    // )
  }
}

export default UserGreeting
