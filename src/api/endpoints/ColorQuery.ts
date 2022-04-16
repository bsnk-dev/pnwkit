import {Kit} from '../..';
import {Color} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

/**
 * Gets all color trade blocs
 * @param {string} query The graphql query to get info with
 * @return {Promise<Treasure[]>}
 */
export default async function colorQuery(
    this: Kit,
    query: string,
): Promise<Color[]> {
  const res = await GraphQL.makeCall(`
    {
      colors {
        ${query}
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  return res.data.colors as Color[];
}
