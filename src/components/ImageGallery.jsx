import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css'
import ImageGalleryItem from './ImageGalleryItem';



export default class ImageGallery extends Component {

  
 
  render() {
    
    const { gallery, openModal } = this.props;
   

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
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func
  }))
}