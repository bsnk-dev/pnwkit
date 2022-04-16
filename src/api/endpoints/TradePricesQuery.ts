import {Kit} from '../..';
import {
  QueryTradepricesArgs,
  Tradeprice,
  TradepricePaginator,
} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  first?: number;
  page?: number;
}

/**
 * Gets a list of trade prices
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true, returns paginator information
 * @return {Promise<Tradeprice[] | TradepricePaginator>}
 */
export default async function tradePricesQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<Tradeprice[]>;
export default async function tradePricesQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<TradepricePaginator>;
export default async function tradePricesQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<Tradeprice[] | TradepricePaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryTradepricesArgs);

  const res = await GraphQL.makeCall(`
    {
      tradeprices${argsToParameters} {
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

  this.setRateLimit(res.rateLimit);

  if (paginator) {
    return res.data.tradeprices as TradepricePaginator;
  }

  return res.data.tradeprices.data as Tradeprice[];
}
