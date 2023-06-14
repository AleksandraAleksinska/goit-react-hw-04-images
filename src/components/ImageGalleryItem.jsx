import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css';


export default class ImageGalleryItem extends Component {
  
  render() {    

    const { webformatURL, tags, openModal } = this.props

    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} onClick={openModal}/>
      </li>
    )
  }
}

ImageGalleryItem.propTypes ={
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired
}