import {Kit} from '../..';
import {QueryWarsArgs, QueryWarsOrderByOrderByClause, War, WarPaginator} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id?: number[];
  days_ago?: number;
  active?: boolean;
  nation_id?: string[];
  alliance_id?: string[];
  first?: number;
  page?: number;

  orderBy?: QueryWarsOrderByOrderByClause
}

/**
 * Gets a list of wars
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator if true it will return paginator info
 * @return {Promise<War[] | WarPaginator>}
 */
export default async function warQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<War[]>;
export default async function warQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<WarPaginator>;
export default async function warQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<War[] | WarPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryWarsArgs);

  const res = await GraphQL.makeCall(`
    {
      wars${argsToParameters} {
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
    return res.wars;
  }

  return res.wars.data as War[];
}
