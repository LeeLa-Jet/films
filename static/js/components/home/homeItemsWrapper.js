import React, { Component } from 'react';
import axios from 'axios';

import List from '../list/list';

class HomeItemsWrapper extends Component {

  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
  }

  getAllItems () {
    axios.get('/api/get_index_list')
      .then((response) => {
        this.setState({
          items: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillMount(){
    this.getAllItems();
  }

  render () {
    return (
      <div className="home_content">
        <div className="inner-wrapper">
          <List items={this.state.items} />
        </div>
      </div>
    )
  }
}

export default HomeItemsWrapper;
