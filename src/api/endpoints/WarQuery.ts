import { QueryWarsArgs, War } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

interface Parameters {
  id?: number[];
  days_ago?: number;
  active?: boolean;
  nation_id?: string[];
  alliance_id?: string[];
}

/**
 * Gets wars
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with 
 * @returns {Promise<War[]>}
 */
export default async function warQuery(
  params: Parameters, 
  query: string,
): Promise<War[]> {
  const argsToParamters = GraphQL.generateParamters(params as QueryWarsArgs);

  const res = await GraphQL.makeCall(`
    {
      wars${argsToParamters} {
        ${query}
      }
    }
  `);

  return res.wars as War[];
}