import superagent from 'superagent';
import {AnyQuery} from '../interfaces/PoliticsAndWarGraphQL';

/**
 * An internal method of handling calls to the P&W graphQL API
 */
class GraphQLService {
  private politicsAndWarAPIRoot = 'https://api.politicsandwar.com/graphql';

  /**
   * Calls the Politics and War V3 API with a query
   * @param {string} query The GraphQL query to make
   * @param {string} apiKey Your P&W API key
   *
   * @return {Promise<any>} Returns data to be type determined in a closer function
   * @throws {Error}
   */
  public async makeCall(query: string, apiKey: string) {
    if (!apiKey) throw new Error('GraphQLService: Cannot make a call without an API key!');

    const res = await superagent.get(this.politicsAndWarAPIRoot)
        .query({
          api_key: apiKey,
          query,
        })
        .accept('json')
        .then()
        .catch((e: Error) => {
          throw new Error(`GraphQLService: Failed to make api call, ${e}`);
        });

    if (!res.body.data) throw new Error(`GraphQLService: Received no data from API call, ${JSON.stringify(res.body)}`);

    return res.body.data;
  }

  /**
   * Takes a query and outputs query Parameters
   * @param {AnyQuery} queryParameters Any one of the five queries that take Parameters
   * @return {string}
   */
  public generateParameters(queryParameters: AnyQuery) {
    const parameters: string[] = [];

    for (const [paramter, value] of Object.entries(queryParameters)) {
      if (value === undefined) continue;

      if (typeof value == 'string') {
        parameters.push(`${paramter}: "${value}"`);
      } else if (typeof value == 'object' && value?.length) {
        let interpretedValue = `${paramter}: [`;

        for (const v of value) {
          if (typeof v == 'string') {
            interpretedValue += `"${v}",`;
          } else {
            interpretedValue += `${v},`;
          }
        }

        interpretedValue.slice(0, -1);
        interpretedValue += ']';

        parameters.push(interpretedValue);
      } else {
        parameters.push(`${paramter}: ${value}`);
      }
    }

    if (parameters.length == 0) return '';

    const joinedParameters = parameters.join(',');
    return `(${joinedParameters})`;
  }
}

export default new GraphQLService();
