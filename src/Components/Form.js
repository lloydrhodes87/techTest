import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: ''
  };
  render() {
    return (
      <div>
        <p>This is the form</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="seach" />
          <input
            id="search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
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
    const { value } = this.state;
    event.preventDefault();
    getSearchValue(value);
    this.setState({
      value: ''
    });
  };
}

export default Form;
