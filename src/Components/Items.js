import React, { Component } from 'react';

class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <p>items</p>
        {items.map(
          ({ id, name, owner: { avatar_url }, html_url, forks_count }) => {
            return (
              <li key={id}>
                <p>{name}</p>
                <img src={avatar_url} alt="avatar" />
                <a href={html_url}>Visit Repo</a>
                <p>Fork Count: {forks_count}</p>
              </li>
            );
          }
        )}
      </div>
    );
  }
}

export default Items;
