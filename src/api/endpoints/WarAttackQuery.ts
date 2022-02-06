import {Kit} from '../..';
import {Bounty, BountyPaginator, QueryBountiesArgs} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  nation_id?: number[];
  min_amount?: number;
  max_amount?: number;

  first?: number;
  page?: number;
}

/**
 * Gets a list of war attacks
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<[] | BountyPaginator>}
 */
/*
export default async function warAttackQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<Bounty[]>;
export default async function warAttackQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<BountyPaginator>;
export default async function warAttackQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<Bounty[] | BountyPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryBountiesArgs);

  const res = await GraphQL.makeCall(`
    {
      bounties${argsToParameters} {
        ${query}
      }
    }
  `, this.apiKey);

  if (paginator) {
    return res.bounties;
  }

  return res.bounties.data as Bounty[];
}
*/

export default function warAttackQuery(): void {
  throw new Error('Not implemented');
}
