import React from 'react';
import { UserForm } from '../UserForm/UserForm.jsx';
import s from './UsersSidebar.module.scss';
import { Search } from '../Search/Search.jsx';

export const UsersSidebar = ({ createUser, onSearch, searchValue }) => {
  return (
    <div className={ s.usersSidebar }>
      <Search label='Search users' onChange={ onSearch } value={ searchValue } />
      <UserForm onSubmit={ createUser } action='Create' />
    </div>
  );
}
