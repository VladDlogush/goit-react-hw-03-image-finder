import React from 'react';
import PropTypes from 'prop-types';
import styled from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ images, openModal }) => {
  return (
    <ul className={styled.gallery}>
      {images.map(image => (
        <li key={image.id}>
          <PhotoCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;
