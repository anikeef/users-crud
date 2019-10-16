export class LocalStorage {
  constructor() {
    localStorage.getItem('items') || localStorage.setItem('items', '[]');
  }

  create(item) {
    const items = this._items();
    items.push(item);
    this._updateItems(items);
  }

  delete(id) {
    const items = this._items();
    const newItems = items.filter((item) => item.id !== id);
    this._updateItems(newItems);
  }

  patch(id, data) {
    const items = this._items();
    const itemIndex = items.findIndex((item) => item.id === id);
    items[itemIndex] = { ...items[itemIndex], ...data };
    this._updateItems(items);
  }

  search(property, query) {
    const items = JSON.parse(localStorage.getItem('items'));
    return items.filter((item) => {
      return item[property].toLowerCase().includes(query.toLowerCase());
    })
  }

  _items() {
    return JSON.parse(localStorage.getItem('items'));
  }

  _updateItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
  }
}