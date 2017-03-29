import React, { Component } from 'react'

class ListItem extends Component {
  render () {
    return (
      <div className="list_item">
        <div className="list_item-bg"></div>
        <div className="list_item-info">
          <p className="list_item-title">Какое-то название</p>
        </div>
      </div>
    )
  }
}

export default ListItem;
