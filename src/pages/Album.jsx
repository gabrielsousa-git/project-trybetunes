import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../Components/MusicCard';

class Album extends Component {
  state = {
    albumInfo: {},
    albumMusics: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      albumInfo: musics[0],
      albumMusics: musics.filter((music) => music.kind === 'song'),
    });
  }

  render() {
    const { albumInfo, albumMusics } = this.state;

    const { collectionName, artworkUrl100, artistName } = albumInfo;

    const musicsHtmlElements = albumMusics.map((music) => {
      const { previewUrl, trackId, trackName } = music;
      return (
        <MusicCard
          key={ trackId }
          previewUrl={ previewUrl }
          trackName={ trackName }
        />
      );
    });

    return (
      <section>
        <header>
          <div data-testid="page-album" />
          <Header />
        </header>

        <main>
          <p data-testid="artist-name">{ artistName }</p>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <p data-testid="album-name">{ collectionName }</p>
          <div>
            { musicsHtmlElements }
          </div>
        </main>
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
