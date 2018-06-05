import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'A variável fica fora do return, more';
    var user = {
      'name': 'La',
      'lastName': 'Lalalala'
    }

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>My name is {user.name} {user.lastName}</p>
      </div>
    );
  }
}

export default App;
