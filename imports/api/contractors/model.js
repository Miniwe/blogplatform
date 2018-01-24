export default class Contractors {
  constructor(doc) {
    _.extend(this, doc);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this.title;
  }
}
