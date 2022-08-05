import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
// import Search from './pages/Search';
// import Favorites from './pages/Favorites';
// import Profile from './pages/Profile';

class Header extends Component {
  state = {
    loading: true,
    user: {},
  }

  async componentDidMount() {
    const name = await getUser();

    this.setState({
      loading: false,
      user: name,
    });
  }

  render() {
    const { loading, user } = this.state;
    const { name } = user;
    return (
      <header data-testid="header-component">
        {
          loading ? (
            <Loading />
          ) : (
            <div>
              <p data-testid="header-user-name">{ name }</p>
              <Link data-testid="link-to-search" to="/search">Search</Link>
              <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
              <Link data-testid="link-to-profile" to="/profile">Profile</Link>
            </div>
          )
        }
      </header>
    );
  }
}

export default Header;
