import React, { Component } from 'react';
import Form from './Components/Form';
import Items from './Components/Items';
import Err from './Components/Err';
import throttle from 'lodash.throttle';

import * as api from './Utils/fetchData';

import './App.css';
import MoreInfo from './Components/MoreInfo';

class App extends Component {
  state = {
    value: '',
    items: {},
    loading: true,
    loadingRepo: true,
    page: 1,
    hasAllItems: false,
    error: false,
    err: '',
    moreInfo: false,
    id: '',
    repoItems: {}
  };
  render() {
    const {
      items,
      loading,
      error,
      err,
      moreInfo,
      value,
      repoItems,
      loadingRepo
    } = this.state;
    if (error) return <Err err={err} goBackFromError={this.goBackFromError} />;
    return (
      <div className="App">
        <h1 className="header">Github Search</h1>
        <Form getSearchValue={this.getSearchValue} />
        <div className="content">
          {loading && !value && <p />}
          {!loading && !moreInfo && (
            <Items items={items} getMoreInfo={this.getMoreInfo} />
          )}
          {!loadingRepo && moreInfo && (
            <MoreInfo items={repoItems} goBackState={this.goBackState} />
          )}
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { hasAllItems } = this.state;

    if (
      (prevState.value !== this.state.value && !hasAllItems) ||
      (prevState.page !== this.state.page && !hasAllItems)
    ) {
      this.handleUpdateData();
    }
    if (prevState.id !== this.state.id) {
      this.handleFetchRepo();
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
  }, 700);

  getSearchValue = value => {
    this.setState({
      value
    });
  };
  getMoreInfo = (bool, id) => {
    this.setState({
      moreInfo: bool,
      id
    });
  };
  handleFetchRepo = () => {
    const { id } = this.state;
    api
      .fetchRepo(id)
      .then(res => {
        console.log(res);
        this.setState({
          repoItems: res,
          loadingRepo: false
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          err
        });
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
        if (!items.length) {
          this.setState({
            hasAllItems: true
          });
        }
      })
      .catch(err => {
        this.setState({
          error: true,
          err
        });
      });
  };
  goBackState = () => {
    this.setState({
      moreInfo: false
    });
  };
  goBackFromError = () => {
    this.setState({
      error: false
    });
  };
}

export default App;
