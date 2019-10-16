import React from 'react';
import { UsersStorage } from '../../services/UsersStorage.js';
import { UsersSidebar } from '../UsersSidebar/UsersSidebar.jsx';
import s from './Users.module.scss';
import { UsersList } from '../UsersList/UsersList.jsx';

export class Users extends React.Component {
  createUser = (data) => {
    this.usersStorage.create(data)
      .then(() => this.update());
  }

  deleteUser = (id) => {
    this.usersStorage.delete(id)
      .then(() => this.update());
  }

  patchUser = (id, data) => {
    this.usersStorage.patch(id, data)
      .then(() => this.update());
  }

  search = (event) => {
    this.usersStorage.search(event.target.value)
      .then((users) => this.setState({ users }));
  }

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.usersStorage = new UsersStorage();
  }

  componentWillMount() {
    this.update();
  }

  render() {
    return (
      <div className={ s.usersPage }>
        <UsersSidebar createUser={ this.createUser } onSearch={ this.search } />
        <UsersList users={ this.state.users } onDelete={ this.deleteUser } onPatch={ this.patchUser } />
      </div>
    );
  }

  update() {
    this.usersStorage.getAll()
      .then((users) => this.setState({ users, newUserName: '' }));
  }
}