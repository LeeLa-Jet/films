import React, { Component } from 'react';
import axios from 'axios';

import Page from './page';

class PageWrapper extends Component {

  constructor (props) {
    super(props);
    this.state = {
      id: this.props.location.pathname.slice(1),
      item: ''
    }
  }

  getItem () {
    axios.get('/api/get_item/' + this.state.id)
      .then((response) => {
        this.setState({
          item: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillMount(){
    this.getItem();
  }


  render () {
    return (
      <div className="page">
        <Page item={this.state.item} />
      </div>
    )
  }
}

export default PageWrapper;
