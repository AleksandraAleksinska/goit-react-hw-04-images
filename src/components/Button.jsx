import React, { Component } from 'react';
import css from 'styles.module.css'

export default class Button extends Component {
  render() {

    const { onClick, gallery } = this.props;

    return (
    
        <div className={css.ButtonSection}>
            { gallery.length > 11 && <button type='submit' onClick={onClick} className={css.Button}>Load more</button>}
        </div>
    )
  }
}

