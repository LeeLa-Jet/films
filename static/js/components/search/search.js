import React, { Component } from 'react';

import SearchIcon from '../../../svg/search.svg';

class Search extends Component {
  render(){
    return (
      <form className="search">
        <input className="search_input" placeholder="Поиск..." />
        <button type="submit" className="search_button"><SearchIcon /></button>
      </form>
    )
  }
}

export default Search;
