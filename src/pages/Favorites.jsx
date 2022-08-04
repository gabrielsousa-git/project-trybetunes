import React, { Component } from 'react';
import Header from '../Components/Header';

class Favorites extends Component {
  render() {
    return (
      <header>
        <div data-testid="page-favorites" />
        <Header />
      </header>
    );
  }
}

export default Favorites;
