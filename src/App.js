import React, { Component } from 'react';
import Form from './Components/Form';

import * as api from './Utils/fetchData';

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
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.value !== this.state.value) {
      const { value } = this.state;
      console.log(value);
      api.fetchGithub(value);
    }
  };

  getSearchValue = value => {
    this.setState({
      value
    });
  };
}

export default App;
