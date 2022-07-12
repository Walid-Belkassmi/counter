import React from "react"

class Counter extends React.Component{
    render(){
        return(
            <div>
               <h2>{this.props.count}</h2>
                <div className="buttons">
                    <button className="moins" onClick={this.props.substract}>-</button>
                    <button className="plus" onClick={this.props.increment}>+</button>
               </div>
            </div>
        )
    }
}

export default Counter