import React, { Component } from 'react';

import HomeHeadline from './homeHeadline';
import HomeItemsWrapper from './homeItemsWrapper';

class Home extends Component {
  render(){
    return (
      <div className="home">
        <HomeHeadline />
        <HomeItemsWrapper />
      </div>
    )
  }
}

export default Home;
