import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { addSong } from '../services/favoriteSongsAPI';
// import getMusics from '../services/musicsAPI';

class MusicCard extends Component {
  // handleInputChange = async () => {
  //   const { trackId } = this.props;
  //   const { history } = this.props;
  //   const musics = await getMusics(trackId);
  //   console.log(musics);
  //   history.push('/loading');
  //   await addSong(musics);
  //   history.push('/album');
  // }

  render() {
    const {
      previewUrl,
      trackName,
      trackId,
      checked,
      isFavoriteMusic,
      musicObj,
    } = this.props;

    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ checked }
            onChange={ () => isFavoriteMusic(musicObj) }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  musicObj: PropTypes.objectOf(PropTypes.string).isRequired,
  isFavoriteMusic: PropTypes.func.isRequired,
};

export default MusicCard;
