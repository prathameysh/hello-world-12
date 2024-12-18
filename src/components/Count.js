import React, { Component } from 'react'

class Count extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    addNumber()
    {
        // this.setState({
        //     count: this.state.count +1
        // },()=> {console.log(this.state.count)} )

        this.setState((prevState,props)=>({
            count: prevState.count+1
        }));
    }

    addFive(){
        this.addNumber()
        this.addNumber()
        this.addNumber()
        this.addNumber()
        this.addNumber()
        console.log("Final count after addFive:", this.state.count);
    }
  
  
    render() {
        return (
        <div>
            <div>Count- {this.state.count}</div> 
            <button onClick={()=>this.addFive()}>+1</button>
        </div>
        )
    }
}

export default Count
