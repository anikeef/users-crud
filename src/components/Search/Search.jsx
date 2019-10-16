import React from 'react';
import s from './Search.module.scss';

export const Search = ({ label, onChange }) => {
  return (
    <div className={ s.search }>
      <label className='label'>{ label }</label>
      <input className={ s.search__input } placeholder='Search' onChange={ onChange } />
    </div>
  );
}