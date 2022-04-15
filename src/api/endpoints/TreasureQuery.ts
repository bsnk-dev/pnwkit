import {Kit} from '../..';
import {Treasure} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

/**
 * Gets a list of all treasures
 * @param {string} query The graphql query to get info with
 * @return {Promise<Treasure[]>}
 */
export default async function treasureQuery(
    this: Kit,
    query: string,
): Promise<Treasure[]> {
  const res = await GraphQL.makeCall(`
    {
      treasures {
        ${query}
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  return res.data.treasures as Treasure[];
}
