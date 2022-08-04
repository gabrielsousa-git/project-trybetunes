import React, { Component } from 'react';
import Header from '../Components/Header';

class Album extends Component {
  render() {
    return (
      <header>
        <div data-testid="page-album" />
        <Header />
      </header>
    );
  }
}

export default Album;
