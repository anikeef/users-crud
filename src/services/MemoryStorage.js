export class MemoryStorage {
  constructor() {
    this.items = [];
  }

  create(item) {
    this.items.push(item);
  }

  getAll() {
    return this.items;
  }

  delete(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  patch(id, data) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    this.items[itemIndex] = { ...this.items[itemIndex], ...data };
  }

  search(property, query) {
    return this.items.filter((item) => {
      return item[property].toLowerCase().includes(query.toLowerCase());
    })
  }
}