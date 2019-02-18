import React, { Component } from 'react';
import Form from './Components/Form';
import Items from './Components/Items';

import * as api from './Utils/fetchData';

import './App.css';

class App extends Component {
  state = {
    value: '',
    items: {},
    loading: true
  };
  render() {
    const { items, loading } = this.state;

    return (
      <div className="App">
        <h1>Github Search</h1>
        <Form getSearchValue={this.getSearchValue} />
        {loading ? <p /> : <Items items={items} />}
      </div>
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.value !== this.state.value) {
      this.handleUpdateData();
    }
  };

  getSearchValue = value => {
    this.setState({
      value
    });
  };
  handleUpdateData = () => {
    const { value } = this.state;
    api
      .fetchGithub(value)
      .then(({ items }) => {
        this.setState({
          items,
          loading: false
        });
      })
      .catch(err => console.log(err));
  };
}

export default App;
