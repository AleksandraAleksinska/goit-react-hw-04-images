import React from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css'
import ImageGalleryItem from './ImageGalleryItem';



const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {gallery.length > 0 &&
        gallery.map((galleryItem) => (
                
          <ImageGalleryItem
            key={galleryItem.id}
            webformatURL={galleryItem.webformatURL}
            tags={galleryItem.tags}
            openModal={() => openModal(galleryItem.largeImageURL, galleryItem.tags)}
          />
        ))}
    </ul>
  )
}

export default ImageGallery

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func
  }))
}