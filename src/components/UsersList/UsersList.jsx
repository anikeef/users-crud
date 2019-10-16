import React from 'react';
import { User } from '../User/User.jsx';
import s from './UsersList.module.scss';

export const UsersList = ({ users, onDelete, onPatch }) => {
  const items = users.map((user) => {
    return (
      <User user={user} onDelete={ onDelete } onPatch={ onPatch } key={ user.id } />
    );
  })
  return (
    <div className={ s.usersList }>
      <h1 className={ s.usersList__title }>Users</h1>
      <div className={ s.usersList__items }>
        { items }
      </div>
    </div>
  );
}
