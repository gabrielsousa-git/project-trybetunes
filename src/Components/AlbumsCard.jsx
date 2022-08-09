import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumsCard extends Component {
  render() {
    const { artistName, albumImg, albumName, albumId } = this.props;
    return (
      <div>
        <p>{ artistName }</p>
        <img src={ albumImg } alt={ artistName } />
        <p>{ albumName }</p>
        <Link
          to={ `/album/${albumId}` }
          data-testid={ `link-to-album-${albumId}` }
        >
          Músicas
        </Link>
      </div>
    );
  }
}

AlbumsCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  albumImg: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  albumId: PropTypes.number.isRequired,
};

export default AlbumsCard;
