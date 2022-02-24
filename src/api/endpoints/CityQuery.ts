import {Kit} from '../..';
import {
  City,
  CityPaginator,
  QueryCitiesArgs,
  QueryCitiesOrderByOrderByClause,
} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id?: number[];
  nation_id?: number[];

  first?: number;
  page?: number;

  orderBy?: QueryCitiesOrderByOrderByClause;
}

/**
 * Gets a list of cities
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<City[] | CityPaginator>}
 */
export default async function cityQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<City[]>;
export default async function cityQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<CityPaginator>;
export default async function cityQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<City[] | CityPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryCitiesArgs);

  const res = await GraphQL.makeCall(`
    {
      cities${argsToParameters} {
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
    return res.cities;
  }

  return res.cities.data as City[];
}
