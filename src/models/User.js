export class User {
  constructor(data, id) {
    this.name = data.name || '';
    this.id = id;
  }
}