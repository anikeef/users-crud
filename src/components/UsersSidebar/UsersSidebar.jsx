import React from 'react';
import { UserForm } from '../UserForm/UserForm.jsx';
import s from './UsersSidebar.module.scss';
import { Search } from '../Search/Search.jsx';

export const UsersSidebar = ({ createUser, onSearch }) => {
  return (
    <div className={ s.usersSidebar }>
      <Search label='Search users' onChange={ onSearch } />
      <UserForm onSubmit={ createUser } action='Create' />
    </div>
  );
}
