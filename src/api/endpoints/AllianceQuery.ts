import {Kit} from '../..';
import {Alliance, AlliancePaginator, QueryAlliancesArgs} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  first: number;
  id?: number[];
  page?: number;
}

/**
 * Gets a list of alliances
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<Alliance[] | AlliancePaginator>} The nations queried or as paginated
 */
export default async function allianceQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<Alliance[]>;
export default async function allianceQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<AlliancePaginator>;
export default async function allianceQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<AlliancePaginator | Alliance[]> {
  const argsToParameters = GraphQL.generateParameters(params as QueryAlliancesArgs);

  const res = await GraphQL.makeCall(`
    {
      alliances${argsToParameters} {
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

  if (paginator) return res.alliances as AlliancePaginator;

  return res.alliances.data as Alliance[];
}
