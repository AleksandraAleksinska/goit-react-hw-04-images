import React from 'react';
import css from 'styles.module.css';
import PropTypes from "prop-types";


const Modal = ({ largeImageURL, tags, closeModal }) => {
  return (
    <div onClick={closeModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  )
}

export default Modal


Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}