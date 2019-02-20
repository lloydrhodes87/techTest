import React, { Component } from 'react';

class Items extends Component {
  state = {
    moreInfo: false,
    id: ''
  };
  render() {
    const { items } = this.props;
    return (
      <div className="itemContainer">
        {items.map(item => {
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

                  <button
                    className="button"
                    onClick={() => this.showMore(item.id)}
                  >
                    More Info
                  </button>
                </div>
              </div>
              {/*{moreInfo && <MoreInfo items={item} />}*/}
            </li>
          );
        })}
      </div>
    );
  }
  showMore = id => {
    console.log('>>>>>>>', id);
    this.setState(
      prevState => ({
        moreInfo: !prevState.moreInfo,
        id
      }),
      () => {
        this.props.getMoreInfo(this.state.moreInfo, this.state.id);
      }
    );
  };
}

export default Items;
