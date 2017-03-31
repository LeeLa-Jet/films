import React, { Component } from 'react'

class ListItem extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const bgStyle = {
      backgroundImage: 'url(' + this.props.item.image + ')',
    };
    return (
      <div className="list_item">
        <div className="list_item-bg" style={bgStyle}></div>
        <div className="list_item-info">
          <p className="list_item-title">{this.props.item.title}</p>
          <p className="list_item-year">{this.props.item.year}</p>
        </div>
      </div>
    )
  }
}

export default ListItem;
