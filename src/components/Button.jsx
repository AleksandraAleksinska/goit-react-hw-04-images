import React from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css'


const Button = ({ onClick, gallery }) => {
  return (
    <div className={css.ButtonSection}>
      { gallery.length > 11 && <button type='submit' onClick={onClick} className={css.Button}>Load more</button>}
    </div>
  )
}

export default Button

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func
  }))
}