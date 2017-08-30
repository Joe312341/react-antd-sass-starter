import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

// antd
import { Button } from 'antd';

const whiteFont = {
  color: 'white'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo}  className="Applogo" alt="logo" />
          <h2 style={ whiteFont }>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This starter is meant to be used for rapid prototyping, <b>NOT</b> production. <br/>
          This project uses Ant Design <br/>
          You can use Sass or Scss files <br/>
          <Button type="primary">Cool Antd Button</Button>
        </p>
      </div>
    );
  }
}

export default App;
