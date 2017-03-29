import React, { Component } from 'react';

import Menu from './menu/menu';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, null)
    })
    return (
      <div>
        <Menu />
        <div className="content">
          {children}
        </div>
      </div>
    )
  }
}

export default App;
