import GraphQL from "./services/GraphQL";
import api from './api';

export default {
  setKey: (key: string) => {
    GraphQL.setKey(key);
  },
  ...api,
}
