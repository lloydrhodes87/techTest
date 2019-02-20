import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: ''
  };
  render() {
    return (
      <div>
        <p className="find">Search for a Repo</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="seach" aria-label="search">
            <input
              id="search"
              name="search"
              value={this.state.value}
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
      value: event.target.value
    });
  };
  handleSubmit = event => {
    const { getSearchValue } = this.props;
    let { value } = this.state;
    value = value.split(' ').join('+');
    event.preventDefault();
    getSearchValue(value);
    this.setState({
      value: ''
    });
  };
}

export default Form;
