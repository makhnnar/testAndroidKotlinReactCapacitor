import React, { Component } from 'react';
import './App.css';

import myapikotlinlibrary from 'myapikotlinlibrary';

//adding a little comment

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Pedro",
      idDevice:"",
      arrInts:[1,2,3,4,5,6,7,8,9],
      arrIntsAsString:'',
      sumResult:0,
      fromNative:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({arrIntsAsString: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    try{
      let value = myapikotlinlibrary.getOperationsHelper().sumValues(
        this.state.arrIntsAsString
      );
      console.log("From js: "+value);
      this.setState({
        sumResult:value
      });
    }catch(error){
      console.log("Error: "+JSON.stringify(error));
    }
    try{
      myapikotlinlibrary.getMain().getHour();
    }catch(error){
      console.log("Error: "+JSON.stringify(error));
    }
    
  }

  handleInputChange(event) {
    this.setState({
      fromNative: event.target.checked
    });
  }

  render() {
    return <div className="App">
        <p>{this.state.idDevice}</p>
        <div>
          From Kotlin Native:
          <input
            name="isNative"
            type="checkbox"
            checked={this.state.fromNative}
            onChange={this.handleInputChange} />
        </div>
        <div>
          From Kotlin js:
          <input
            name="isJs"
            type="checkbox"
            checked={!this.state.fromNative}
            onChange={this.handleInputChange} />
        </div>
        <input 
          type="text" 
          value={this.state.arrIntsAsString} 
          onChange={this.handleChange} 
        />
        <button onClick={this.handleSubmit}  >
          SUMAR
        </button>
        <p>{this.state.sumResult}</p>
    </div>;
  }
}

export default App;
