import React, { Component } from 'react';

class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="itemContainer">
        {items.map(
          ({ id, name, owner: { avatar_url }, html_url, forks_count }) => {
            return (
              <li key={id}>
                <div className="item">
                  <div>
                    <img className="image" src={avatar_url} alt="avatar" />
                  </div>
                  <div>
                    <p className="text">{name}</p>

                    <p className="text" id="fork">
                      Fork Count: {forks_count}
                    </p>
                    <a className="button" id="button-visit" href={html_url}>
                      Visit Repo
                    </a>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </div>
    );
  }
}

export default Items;
