import React, { Component } from 'react';

import ListItem from './listItem';

class List extends Component {
  render () {
    return (
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    )
  }
}

export default List;
