import GraphQL from "./services/GraphQL";
import api from './api';

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
