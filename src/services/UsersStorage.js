import { User } from '../models/User';
import { config } from '../configurations/config';

const generateUniqueId = () => Date.now();

// Promises are used here to provide easy switching between sync and async storage types.
// This is currently not used, but would be quite useful if we'd like to add something like 
// remote storage

export class UsersStorage {
  constructor() {
    this.storage = new config.usersStorage();
  }

  create(data) {
    return Promise.resolve(this.storage.create(new User(data, generateUniqueId())));
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