import { Alliance, AlliancePaginator, QueryAlliancesArgs } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

interface Parameters {
  first: number;
  id?: number[];
  page?: number;
}

/**
 * Gets alliance results from a query
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with 
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<Alliance[] | AlliancePaginator>} The nations queried or as paginated
 */
export default async function allianceQuery(params: Parameters, query: string, paginator?: false): Promise<Alliance[]>;
export default async function allianceQuery(params: Parameters, query: string, paginator: true): Promise<AlliancePaginator>;
export default async function allianceQuery(
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<AlliancePaginator | Alliance[]> {
  const argsToParamters = GraphQL.generateParamters(params as QueryAlliancesArgs);

  const res = await GraphQL.makeCall(`
    {
      alliances${argsToParamters} {
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
  `);

  if (paginator) return res.alliances as AlliancePaginator; 

  return res.alliances.data as Alliance[];
}