import { Kit } from "../..";
import { QueryWarsArgs, War } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

export interface Parameters {
  id?: number[];
  days_ago?: number;
  active?: boolean;
  nation_id?: string[];
  alliance_id?: string[];
}

/**
 * Gets a list of wars
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with 
 * @returns {Promise<War[]>}
 */
export default async function warQuery(
  this: Kit,
  params: Parameters, 
  query: string,
): Promise<War[]> {
  const argsToParameters = GraphQL.generateParameters(params as QueryWarsArgs);

  const res = await GraphQL.makeCall(`
    {
      wars${argsToParameters} {
        ${query}
      }
    }
  `, this.apiKey);

  return res.wars as War[];
}