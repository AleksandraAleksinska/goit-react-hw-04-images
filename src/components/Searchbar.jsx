import React from 'react';
import PropTypes from "prop-types";
import css from 'styles.module.css'



const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form onSubmit={onSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      
        <input
          className={css.SearchFormInput}
          type="text"
          name='q'
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        
      </form>
    </header>
  )
}

export default Searchbar

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}