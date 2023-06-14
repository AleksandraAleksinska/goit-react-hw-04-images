import React, { Component } from 'react';
import css from 'styles.module.css';
import PropTypes from "prop-types";

export default class Modal extends Component {


  render() {

    const { largeImageURL, tags, closeModal } = this.props

    return (
        <div onClick={closeModal} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}