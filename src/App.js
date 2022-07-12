import React from "react"
import './App.css';
import Counter from "./components/Counter"
import './styles/global.css'
 
class App extends React.Component {
  constructor(){
    super()
    
    //Déclaration du state initialisé à 0 
    this.state = {
      value: 0,
      value2:0
    }

  }

  handleButtonPlus = () => {
  if(this.state.value < this.state.value2){
    this.setState({value: this.state.value + 1})
  }
   if(this.state.value === this.state.value2 && this.state.value < 100){
    this.setState({value: this.state.value + 1})
    this.setState({value2: this.state.value2 + 1})
    }

  }

  handleButtonMinus = () => {
    if(this.state.value > 0){
      this.setState({value: this.state.value - 1})
    }
    
  }

// ----------------- Compteur 2 --------------------
  handleButtonPlus2 = () => {
    if(this.state.value2 < 100){
      this.setState({value2: this.state.value2 + 1})
    }
  }  

  handleButtonMinus2 = () => {
    if(this.state.value === this.state.value2 && this.state.value2 > 0){
      this.setState({value2: this.state.value2 - 1})
      this.setState({value: this.state.value - 1})
      }
  }

  render(){
    return(
      <div className="main">
        <div className="first">
          <h1>Counter</h1>
          <div className="counter">
            <Counter count={this.state.value} increment={this.handleButtonPlus} substract={this.handleButtonMinus}/>
            <Counter count={this.state.value2} increment={this.handleButtonPlus2} substract={this.handleButtonMinus2}/>
          </div>
        </div>
      </div>


    )
  }
}

export default App;