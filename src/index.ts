import GraphQL from "./services/GraphQL";
import api from './api';

const setKey = (key: string) => {
  GraphQL.setKey(key);
};

exports.setKey = setKey;

for (const [key, value] of Object.entries(api)) {
  exports[key] = value;
}

export default {
 /**
 * Set the API key to use with PnWKit
 * @param {string} key P&W API key 
 */
  setKey: (key: string) => {
  GraphQL.setKey(key);
  },
  ...api,
}
