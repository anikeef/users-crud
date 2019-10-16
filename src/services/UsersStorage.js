import { User } from '../models/User';
import { config } from '../configurations/config';

const getUniqueId = () => Date.now();

// Promises are used here to provide easy switching between sync and async storage types

export class UsersStorage {
  constructor() {
    this.storage = new config.usersStorage;
  }

  getAll() {
    return Promise.resolve(this.storage.getAll());
  }

  create(data) {
    return Promise.resolve(this.storage.create(new User(data, getUniqueId())));
  }

  delete(id) {
    return Promise.resolve(this.storage.delete(id));
  }

  patch(id, data) {
    return Promise.resolve(this.storage.patch(id, data));
  }

  search(query) {
    return Promise.resolve(this.storage.search('name', query));
  }
}