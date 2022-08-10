import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import MusicCard from '../Components/MusicCard';
import Loading from './Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    albumInfo: {},
    albumMusics: [],
    loading: false,
    favoriteMusics: [],
  }

  componentDidMount() {
    this.filteredSongs();
    this.getFavoriteMusics();
  }

  filteredSongs = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      albumInfo: musics[0],
      albumMusics: musics.filter((music) => music.kind === 'song'),
    });
  }

  isFavoriteMusic = async (object) => {
    const { favoriteMusics } = this.state;
    this.setState({
      loading: true,
    });
    await addSong(object);
    this.setState({
      loading: false,
      favoriteMusics: [...favoriteMusics, object.trackId],
    });
  }

  getFavoriteMusics = async () => {
    const { favoriteMusics } = this.state;
    this.setState({
      loading: true,
    });
    const favorites = await getFavoriteSongs();
    this.setState({
      loading: false,
      favoriteMusics: [...favoriteMusics, ...favorites.map((fav) => fav.trackId)],
    });
  }

  render() {
    const { albumInfo, albumMusics, loading, favoriteMusics } = this.state;

    const { collectionName, artworkUrl100, artistName } = albumInfo;

    const musicsHtmlElements = albumMusics.map((music) => {
      const { previewUrl, trackId, trackName } = music;
      return (
        <MusicCard
          key={ trackId }
          previewUrl={ previewUrl }
          trackName={ trackName }
          trackId={ trackId }
          isFavoriteMusic={ this.isFavoriteMusic }
          musicObj={ music }
          checked={ favoriteMusics.some((favSong) => music.trackId === favSong) }
        />
      );
    });

    return (
      <section>
        <header>
          <div data-testid="page-album" />
          <Header />
        </header>

        { loading ? <Loading />
          : (
            <main>
              <p data-testid="artist-name">{ artistName }</p>
              <img src={ artworkUrl100 } alt={ collectionName } />
              <p data-testid="album-name">{ collectionName }</p>
              <div>
                { musicsHtmlElements }
              </div>
            </main>
          )}
      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
