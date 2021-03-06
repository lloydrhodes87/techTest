import React, { Component } from 'react';

class Form extends Component {
  state = {
    searchTerm: ''
  };
  render() {
    return (
      <div>
        <p className="find">Search for a Repo</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="search" aria-label="search">
            <input
              id="search"
              name="search"
              value={this.state.searchTerm}
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  handleSubmit = event => {
    const { getSearchValue } = this.props;
    let { searchTerm } = this.state;
    searchTerm = searchTerm.split(' ').join('+');
    event.preventDefault();
    getSearchValue(searchTerm);
    this.setState({
      searchTerm: ''
    });
  };
}

export default Form;
