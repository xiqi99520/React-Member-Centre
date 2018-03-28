import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Nav from '../nav/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to shop</h1>
        </header>
        <p className="App-intro">
            欢迎来到我第一个react项目
        </p>
      </div>
    );
  }
}

export default App;