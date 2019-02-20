import React, { Component } from 'react';
import * as api from '../Utils/fetchData';

class MoreInfo extends Component {
  state = {
    repoLink: '',
    moreInfo: true
  };
  render() {
    const {
      forks_count,
      open_issues_count,
      html_url,
      name,
      owner
    } = this.props.items;
    return (
      <div className="moreInfo">
        <div>
          <button className="button" onClick={this.props.goBackState}>
            back
          </button>
        </div>
        <div className="moreInfoItem">
          <img className="image" src={owner.avatar_url} alt="avatar" />
          <div className="text" id="text">
            <p>Name: {name}</p>
            <p>Fork Count: {forks_count}</p>
            <p>Open Issues Count: {open_issues_count}</p>
          </div>
        </div>

        <div className="buttonContainer">
          <button className="button">
            <a href={html_url}>View Repo</a>
          </button>
          <button className="button" onClick={this.getReadme}>
            <a href={this.state.readMeLink}>View Readme</a>
          </button>
        </div>
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
