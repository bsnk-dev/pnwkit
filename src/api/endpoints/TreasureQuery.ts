import { Treasure } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

/**
 * Gets all treasures
 * @param {string} query The graphql query to get info with 
 * @returns {Promise<Treasure[]>}
 */
export default async function treasureQuery(
  query: string,
): Promise<Treasure[]> {
  const res = await GraphQL.makeCall(`
    {
      treasures {
        ${query}
      }
    }
  `);

  return res.treasures as Treasure[];
}
