import React, { Component } from 'react';
import './App.css';

import main from 'kotlinnodelibrary';

import { Plugins } from '@capacitor/core';
const { DeviceProperties, OperationsPlugin } = Plugins;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Pedro",
      idDevice:"",
      arrInts:[1,2,3,4,5,6,7,8,9],
      arrIntsAsString:'',
      sumResult:0
    };
    DeviceProperties.getIdDevice()
      .then((value)=>{
        console.log(JSON.stringify(value));
        this.setState({idDevice:value.idDevice});
      })
      .catch((onError)=>{
        console.log("idDivice: "+JSON.stringify(onError));
      });
    try{
      console.log("main: "+JSON.stringify(main));
      console.log("getRandomNumber: "+main.getMain().getRandomNumber());
      console.log("arrInts: "+JSON.stringify(this.state.arrInts))
      console.log("sumValues: "+main.getMain().sumValues(this.state.arrInts));
    }catch(error){
      console.log("error: "+JSON.stringify(error));
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({arrIntsAsString: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    OperationsPlugin.sumValues(
        {values:this.state.arrIntsAsString}
    ).then((value)=>{
        console.log(JSON.stringify(value));
        this.setState({sumResult:value.result});
    })
    .catch((onError)=>{
        console.log("sumResult: "+JSON.stringify(onError));
    });
  }

  render() {
    return <div className="App">
        <p>{this.state.idDevice}</p>
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
