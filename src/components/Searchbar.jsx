import React, { Component } from 'react';
import css from 'styles.module.css'


export default class SearchBar extends Component {
    
  render() {

    const { onSubmit} = this.props

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
}

