import {Kit} from '../..';
import {
  Bounty,
  BountyPaginator,
  QueryBountiesArgs,
  QueryBountiesOrderByOrderByClause,
} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  nation_id?: number[];
  min_amount?: number;
  max_amount?: number;

  first?: number;
  page?: number;

  orderBy?: QueryBountiesOrderByOrderByClause;
}

/**
 * Gets a list of bounties
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<Bounty[] | BountyPaginator>}
 */
export default async function bountyQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<Bounty[]>;
export default async function bountyQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<BountyPaginator>;
export default async function bountyQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<Bounty[] | BountyPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryBountiesArgs);

  const res = await GraphQL.makeCall(`
    {
      bounties${argsToParameters} {
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
    return res.data.bounties;
  }

  return res.data.bounties.data as Bounty[];
}
