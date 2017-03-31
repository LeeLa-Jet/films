import React, { Component } from 'react';

import ListItem from './listItem';

class List extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let items;
    items = this.props.items.map((item) => {
      return <ListItem item={item} key={item.id} />
    });
    return (
      <div className="list">
        {items}
      </div>
    )
  }
}

export default List;
