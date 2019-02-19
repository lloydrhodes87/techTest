import React, { Component } from 'react';
import * as api from '../Utils/fetchData';

class MoreInfo extends Component {
  state = {
    repoLink: ''
  };
  render() {
    return (
      <div>
        <a
          className="button"
          id="button-visit"
          href={this.props.items.html_url}
        >
          View Repo
        </a>
        <p>Fork Count: {this.props.items.forks_count}</p>
        <button onClick={this.getReadme}>
          <a href={this.state.readMeLink}>View Readme</a>
        </button>
      </div>
    );
  }
  getReadme = () => {
    const { name } = this.props.items;
    const { login } = this.props.items.owner;
    api.fetchReadme(login, name).then(res => {
      this.setState({
        readMeLink: res.html_url
      });
    });
  };
}

export default MoreInfo;
