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

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
    this.usersStorage.search(event.target.value)
      .then((users) => this.setState({ users }));
  }

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchQuery: ''
    };
    this.usersStorage = new UsersStorage();
  }

  componentWillMount() {
    this.update();
  }

  render() {
    return (
      <div className={ s.usersPage }>
        <UsersSidebar createUser={ this.createUser } onSearch={ this.handleSearch } searchValue={ this.state.searchQuery } />
        <UsersList users={ this.state.users } onDelete={ this.deleteUser } onPatch={ this.patchUser } />
      </div>
    );
  }

  update() {
    this.usersStorage.search(this.state.searchQuery)
      .then((users) => this.setState({ users }));
  }
}