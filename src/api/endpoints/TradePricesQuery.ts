import { Kit } from "../..";
import { QueryTradepricesArgs, Tradeprice } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

export interface Parameters {
  limit?: number;
}

/**
 * Gets a list of trade prices
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with 
 * @returns {Promise<Tradeprice[]>}
 */
export default async function tradePricesQuery(
  this: Kit,
  params: Parameters,
  query: string,
): Promise<Tradeprice[]> {
  const argsToParameters = GraphQL.generateParameters(params as QueryTradepricesArgs);

  const res = await GraphQL.makeCall(`
    {
      tradeprices${argsToParameters} {
        ${query}
      }
    }
  `, this.apiKey);

  return res.tradeprices as Tradeprice[];
}