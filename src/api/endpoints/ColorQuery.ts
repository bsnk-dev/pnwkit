import { Kit } from "../..";
import { Color } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

/**
 * Gets all color trade blocs
 * @param {string} query The graphql query to get info with 
 * @returns {Promise<Treasure[]>}
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

  return res.colors as Color[];
}
