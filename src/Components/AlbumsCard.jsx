import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumsCard extends Component {
  render() {
    const { artistName, albumImg, albumName, albumId } = this.props;
    const linkPath = `/album/${albumId}`;
    return (
      <div>
        <p>{ artistName }</p>
        <img src={ albumImg } alt={ artistName } />
        <p>{ albumName }</p>
        <Link
          to={ linkPath }
          data-testid={ `link-to-album-${albumId}` }
        >
          Mais informações
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
