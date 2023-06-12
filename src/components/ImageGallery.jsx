import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css'
import ImageGalleryItem from './ImageGalleryItem';
import 'basiclightbox/dist/basicLightbox.min.css';

const basicLightbox = require('basiclightbox');

export default class ImageGallery extends Component {
  render() {

    const { gallery } = this.props
    

    return (
        <ul className={css.ImageGallery}>
            {gallery.length > 0 ? gallery.map(galleryItem => <ImageGalleryItem
                key={galleryItem.id}
                webformatURL={galleryItem.webformatURL}
                tags={galleryItem.tags}
                openModal={() => {
                  basicLightbox.create(
                    `<img src="${galleryItem.largeImageURL}">
	                  `).show()
                }}

            />): null}
        </ul>
    )
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func
  }))
}