import PnwKitAPI from './api';

/**
 * The main application class
 */
export class Kit extends PnwKitAPI {
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

const kit = new Kit();

for (const [key] of Object.entries(PnwKitAPI)) {
  exports[key] = kit[key];
}
exports.setKey = kit.setKey;

export default kit;
