import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

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
            <p data-testid="header-user-name">{ name }</p>
          )
        }
      </header>
    );
  }
}

export default Header;
