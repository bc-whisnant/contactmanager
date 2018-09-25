import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'; 

import Header from './components/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    // we can put js expressions here
    // const name = 'Larry';
    // const showHello = false;
    // const showMath = true;
    // const num1 = 40;
    // const num2 = 23;

    // let math;
    // if (showMath) {
    //   math = <h4>{num1} + {num2} = {num1 + num2}</h4>; 
    // } else {
    //   math = null;
    // }
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <Contacts />
        </div>
        
      </div>
    );
  }
}

export default App;
