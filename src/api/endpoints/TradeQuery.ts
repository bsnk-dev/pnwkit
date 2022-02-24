import {Kit} from '../..';
import {
  QueryTradesArgs, QueryTradesOrderByOrderByClause,
  Trade,
  TradePaginator,
} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  first?: number;
  nation_id?: string[];
  offer_resource?: string;
  buy_or_sell?: string;
  accepted?: boolean;

  orderBy?: QueryTradesOrderByOrderByClause
}

/**
 * Gets a list of trades
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true returns paginator info
 * @return {Promise<Trade[] | TradePaginator>}
 */
export default async function tradeQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<Trade[]>;
export default async function tradeQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<TradePaginator>;
export default async function tradeQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<Trade[] | TradePaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryTradesArgs);

  const res = await GraphQL.makeCall(`
    {
      trades${argsToParameters} {
        ${
    (paginator) ?
      `
          paginatorInfo {
            count,
            currentPage,
            firstItem,
            hasMorePages,
            lastItem,
            lastPage,
            perPage,
            total
          },
          `:''
}
        data {
          ${query}
        }
      }
    }
  `, this.apiKey);

  if (paginator) {
    return res.trades as TradePaginator;
  }

  return res.trades.data as Trade[];
}
