import React from 'react';
import './App.css';

class App extends React.Component {

  state ={
    number : 0
  }


 increaseNumber =() =>{
   this.setState({
     number:this.state.number+1

   })
 }

 decreaseNumber =() =>{
    if(this.state.number < 1) {
      this.setState({
        number:this.state.number=0 })
    }
    else {
      this.setState({
        number:this.state.number-1
      })
    }
  }
 
render() {
  return(
    
      <div> 
        
          <h1>{this.state.number}</h1>
          <button onClick={this.increaseNumber}>Increase</button>

          <button onClick={this.decreaseNumber}>decrease</button>
         
        
         </div>
    )
  }
}


export default App;
