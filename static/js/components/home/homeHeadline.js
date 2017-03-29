import React, { Component } from 'react';

import Search from '../search/search';

class HomeHeadline extends Component {
  render(){
    const bgStyle = {
      backgroundImage: 'url(/static/img/bg.jpg)',
    };
    return (
      <div className="home_headline">
        <div className="home_headline-bg" style={bgStyle}></div>
        <div className="home_headline-search inner-wrapper">
          <p className="home_headline-search-text">Поиск по фильмам</p>
          <Search />
        </div>
      </div>
    )
  }
}

export default HomeHeadline;
