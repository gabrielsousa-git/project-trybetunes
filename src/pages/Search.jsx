import React, { Component } from 'react';
import AlbumsCard from '../Components/AlbumsCard';
import Header from '../Components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const INITIAL_STATE = {
  bandName: '',
};

class Search extends Component {
  state = {
    isDisabled: true,
    bandName: '',
    albumsBand: [],
    buttonClicked: false,
  }

  handleValidationButton = (event) => {
    this.setState({ bandName: event.target.value }, () => {
      const { bandName } = this.state;
      const minLength = 2;
      const validateForName = bandName.length < minLength;
      this.setState({ isDisabled: validateForName });
    });
  }

  handleSearchButton = async () => {
    const { bandName } = this.state;
    const albums = await searchAlbumsAPI(bandName);
    this.setState({
      albumsBand: albums,
      buttonClicked: true,
      searchName: bandName,
    });
    this.setState({ ...INITIAL_STATE });
  }

  createAlmbumsCArd = () => {
    const { albumsBand } = this.state;
    if (albumsBand.length === 0) return <p>Nenhum álbum foi encontrado</p>;
    const albumsHtmlElements = albumsBand.map(
      ({ artistName, artworkUrl100, collectionName, collectionId }) => (
        <AlbumsCard
          key={ collectionId }
          artistName={ artistName }
          albumImg={ artworkUrl100 }
          albumName={ collectionName }
          albumId={ collectionId }
        />
      ),
    );
    return albumsHtmlElements;
  }

  render() {
    const { isDisabled, bandName, buttonClicked, searchName } = this.state;
    const result = this.createAlmbumsCArd();
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
                onClick={ this.handleSearchButton }
                value="Procurar"
              />
            </label>

          </form>

          <div>
            { buttonClicked ? (
              <div>
                <p>
                  Resultado de álbuns de:
                  {' '}
                  { searchName }
                </p>
                { result }
              </div>
            ) : (
              <p>Digite o nome do artista</p>
            )}
          </div>

        </main>

      </section>
    );
  }
}

export default Search;
