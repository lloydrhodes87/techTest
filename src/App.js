import React, { Component } from 'react';
import Form from './Components/Form';

import './App.css';

class App extends Component {
  state = {
    value: '',
    data: {}
  };
  render() {
    return (
      <div className="App">
        <h1>Github Search</h1>
        <Form getSearchValue={this.getSearchValue} />
      </div>
    );
  }
  getSearchValue = value => {
    this.setState({
      value
    });
  };
}

export default App;
