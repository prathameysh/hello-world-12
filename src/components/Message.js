import React, {Component} from "react"; //* Class component

class Message extends Component
{

    constructor () 
    {
        super()
        this.state = 
        {
            message:"Welcome Visitor",
            buttomText:"Subscribe"
        }
    
    }

    changeMessage()
    {
        this.setState((prevState) => ({
            message: prevState.message === "Welcome Visitor" ? "Thank you for Subscribing" : "Welcome Visitor",
            buttomText: prevState.buttomText==="Subscribe" ? "Subscribed" : "Subscribe"
        }));

    }


    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>{this.state.buttomText}</button>
            </div>
        ) 
    }
}

export default Message