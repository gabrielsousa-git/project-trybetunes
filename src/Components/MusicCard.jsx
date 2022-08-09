import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
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
  musicObj: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  isFavoriteMusic: PropTypes.func.isRequired,
};
export default MusicCard;
