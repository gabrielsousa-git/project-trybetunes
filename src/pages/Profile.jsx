import React, { Component } from 'react';
import Header from '../Components/Header';

class Profile extends Component {
  render() {
    return (
      <header>
        <div data-testid="page-profile" />
        <Header />
      </header>
    );
  }
}

export default Profile;
