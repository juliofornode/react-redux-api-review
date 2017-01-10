import React, { Component } from 'react';
import HeaderComponent from './header_component';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        {this.props.children}
      </div>
    );
  }
}
