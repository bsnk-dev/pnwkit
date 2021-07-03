import { QueryTradesArgs, Trade } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

export interface Parameters {
  limit?: number;
  nation_id?: string[];
  offer_resource?: string;
  buy_or_sell?: string;
  accepted?: boolean;
}

/**
 * Gets a list of trades
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with 
 * @returns {Promise<Trade[]>}
 */
export default async function tradeQuery(
  params: Parameters,
  query: string,
): Promise<Trade[]> {
  const argsToParamters = GraphQL.generateParamters(params as QueryTradesArgs);

  const res = await GraphQL.makeCall(`
    {
      trades${argsToParamters} {
        ${query}
      }
    }
  `);

  return res.trades as Trade[];
}