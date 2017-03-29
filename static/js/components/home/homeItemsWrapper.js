import React, { Component } from 'react';

import List from '../list/list';

class HomeItemsWrapper extends Component {
  render () {
    return (
      <div className="home_content">
        <div className="inner-wrapper">
          <List />
        </div>
      </div>
    )
  }
}

export default HomeItemsWrapper;
