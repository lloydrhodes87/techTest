import React, { Component } from 'react';
import MoreInfo from './MoreInfo';

class Items extends Component {
  state = {
    moreInfo: false
  };
  render() {
    const { items } = this.props;
    const { moreInfo } = this.state;
    return (
      <div className="itemContainer">
        {items.map(item => {
          console.log(item);
          return (
            <li key={item.id}>
              <div className="item">
                <div>
                  <img
                    className="image"
                    src={item.owner.avatar_url}
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="text">{item.name}</p>

                  <button onClick={this.showMore}>More Info</button>
                </div>
              </div>
              {moreInfo && <MoreInfo items={item} />}
            </li>
          );
        })}
      </div>
    );
  }
  showMore = () => {
    this.setState(prevState => ({
      moreInfo: !prevState.moreInfo
    }));
  };
}

export default Items;
