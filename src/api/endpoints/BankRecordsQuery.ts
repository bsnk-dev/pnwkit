import {Kit} from '../..';
import {
  Bankrec,
  BankrecPaginator,
  QueryBankrecsArgs,
} from '../../interfaces/PoliticsAndWarGraphQL';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id?: number[];
  stype?: number[];
  rtype?: number[];

  or_type?: number;
  sid?: number;
  rid?: number;

  or_id?: number;

  first?: number;
  page?: number;
}

/**
 * Gets a list of bank records
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<Bankrec[] | BankrecPaginator>}
 */

export default async function bankRecordsQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<Bankrec[]>;
export default async function bankRecordsQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<BankrecPaginator>;
export default async function bankRecordsQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<Bankrec[] | BankrecPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as QueryBankrecsArgs);

  const res = await GraphQL.makeCall(`
    {
      bankrecs${argsToParameters} {
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
    return res.bankrecs;
  }

  return res.bankrecs.data as Bankrec[];
}
