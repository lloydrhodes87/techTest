import React, { Component } from 'react';
import Form from './Components/Form';
import Items from './Components/Items';
import throttle from 'lodash.throttle';

import * as api from './Utils/fetchData';

import './App.css';

class App extends Component {
  state = {
    value: '',
    items: {},
    loading: true,
    page: 1
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
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.handleUpdateData();
    }
  };

  handleScroll = throttle(() => {
    const distanceFromTop = window.scrollY;
    const heightOfScreen = window.innerHeight;
    const fullDocumentHeight = document.body.scrollHeight;

    if (distanceFromTop + heightOfScreen > fullDocumentHeight - 100) {
      console.log('page');
      this.setState(({ page }) => ({
        page: page + 1
      }));
    }
  }, 1000);

  getSearchValue = value => {
    this.setState({
      value
    });
  };
  handleUpdateData = () => {
    const { value, page } = this.state;
    api
      .fetchGithub(value, page)
      .then(({ items }) => {
        this.setState(prevState => ({
          items: page === 1 ? items : [...prevState.items, ...items],
          loading: false
        }));
      })
      .catch(err => console.log(err));
  };
}

export default App;
