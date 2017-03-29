import React, { Component } from 'react';

class Menu extends Component {
  render(){
    return (
      <nav className="menu">
        <div className="inner-wrapper">
          <a href="/" className="menu_logo">Фильмы</a>
        </div>
        <a href="/admin" target="_blank" className="menu_admin">Админка</a>
      </nav>
    )
  }
}

export default Menu;
