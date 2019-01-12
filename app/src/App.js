import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './container/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3> Form </h3>
        <FormContainer/>
      </div>
    );
  }
}

export default App;
