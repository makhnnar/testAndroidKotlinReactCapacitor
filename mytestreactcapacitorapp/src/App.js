import React, { Component } from 'react';
import './App.css';

import main from 'kotlinnodelibrary';

import { Plugins } from '@capacitor/core';
const { DeviceProperties } = Plugins;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Pedro",
      idDevice:"",
      arrInts:[1,2,3,4,5,6,7,8,9]
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
  }

  render() {
    return <div className="App">
        <p>{this.state.idDevice}</p>
    </div>;
  }
}

export default App;
