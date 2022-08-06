import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  state = {
    isDisabled: true,
    bandName: '',
  }

  handleValidationButton = (event) => {
    this.setState({ bandName: event.target.value }, () => {
      const { bandName } = this.state;
      const minLength = 2;
      const validateForName = bandName.length < minLength;
      this.setState({ isDisabled: validateForName });
    });
  }

  render() {
    const { isDisabled, bandName } = this.state;

    return (
      <section>

        <header data-testid="page-search">
          <Header />
          <h1>Search</h1>
        </header>

        <main>
          <form action="">
            <label htmlFor="search-artist-input">
              <input
                type="text"
                data-testid="search-artist-input"
                value={ bandName }
                onChange={ this.handleValidationButton }
              />
            </label>
            <label htmlFor="search-artist-button">
              <input
                type="button"
                data-testid="search-artist-button"
                disabled={ isDisabled }
                value="Procurar"
              />
            </label>
          </form>
        </main>

      </section>
    );
  }
}

export default Search;
