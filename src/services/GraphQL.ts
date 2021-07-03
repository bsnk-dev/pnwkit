import superagent from 'superagent';
import {AnyQuery} from '../interfaces/PoliticsAndWarGraphQL';

/**
 * An internal method of handling calls to the P&W graphQL API
 */
class GraphQLService {
  private apiKey = '';
  private politicsAndWarAPIRoot = 'https://api.politicsandwar.com/graphql';

  /**
   * Calls the Politics and War V3 API with a query
   * @param {string} query The GraphQL query to make
   *
   * @return {Promise<any>} Returns data to be type determined in a closer function
   * @throws {Error}
   */
  public async makeCall(query: string) {
    if (!this.apiKey) throw new Error('GraphQLService: Cannot make a call without an API key!');

    const res = await superagent.get(this.politicsAndWarAPIRoot)
        .query({
          api_key: this.apiKey,
          query,
        })
        .accept('json')
        .then()
        .catch((e: Error) => {
          throw new Error(`GraphQLService: Failed to make api call, ${e}`);
        });

    if (!res.body.data) throw new Error(`GraphQLService: Recieved no data from API call, ${JSON.stringify(res.body)}`);

    return res.body.data;
  }

  /**
   * Takes a query and outputs query paramters
   * @param {AnyQuery} queryParamters Any one of the five queries that take paramters
   * @return {string}
   */
  public generateParamters(queryParamters: AnyQuery) {
    const parameters: string[] = [];

    for (const [paramter, value] of Object.entries(queryParamters)) {
      if (!value) continue;

      if (typeof value == 'string') {
        parameters.push(`${paramter}: ${value}`);
      } else if (typeof value == 'object' && value?.length) {
        parameters.push(`${paramter}: [${value.join(',')}]`);
      } else {
        parameters.push(`${paramter}: ${value}`);
      }
    }

    if (parameters.length == 0) return '';

    const joinedParamters = parameters.join(',');
    return `(${joinedParamters})`;
  }

  /**
   * Sets the api key to make calls with
   * @param {string} apiKey The new API key to use
   */
  public setKey(apiKey: string) {
    this.apiKey = apiKey;
  }
}

export default new GraphQLService();
