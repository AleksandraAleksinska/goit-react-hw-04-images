import React from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css';



const ImageGalleryItem = ({ webformatURL, tags, openModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} onClick={openModal}/>
    </li>
  )
}

export default ImageGalleryItem


ImageGalleryItem.propTypes ={
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired
}