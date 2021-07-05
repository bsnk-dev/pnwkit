import api from './api';

export class Kit {
  [key: string]: any;

  apiKey = '';

  /**
   * Set the pnwkit instance's key.
   * @param key 
   */
  setKey(key: string) {
    this.apiKey = key;
  }
}

for (const [key, value] of Object.entries(api)) {
  Kit.prototype[key] = value;
}

const kit = new Kit();

for (const [key] of Object.entries(api)) {
  exports[key] = kit[key];
}
exports.setKey = kit.setKey;

export default kit;
