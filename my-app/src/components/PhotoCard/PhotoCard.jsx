import React from 'react';
import PropTypes from 'prop-types';
import styled from './PhotoCard.module.css';

const PhotoCard = ({ image, openModal }) => {
  return (
    <div className={styled.photoCard}>
      <img src={image.webformatURL} alt={image.tags} />

      <div className={styled.stats}>
        <p className={styled.statsItem}>
          <i className="material-icons">thumb_up</i>
          {image.likes}
        </p>
        <p className={styled.statsItem}>
          <i className="material-icons">visibility</i>
          {image.views}
        </p>
        <p className={styled.statsItem}>
          <i className="material-icons">comment</i>
          {image.comments}
        </p>
        <p className={styled.statsItem}>
          <i className="material-icons">cloud_download</i>
          {image.downloads}
        </p>
      </div>

      <button
        type="button"
        className={styled.fullscreenButton}
        onClick={() => openModal(image.largeImageURL)}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

PhotoCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PhotoCard;
