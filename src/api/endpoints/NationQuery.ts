import { Nation, QueryNationsArgs } from "../../interfaces/PoliticsAndWarGraphQL";
import GraphQL from "../../services/GraphQL";

enum AlliancePosition {
  Noalliance = 0,
  Applicant = 1,
  Member = 2,
  Officer = 3,
  Heir = 4,
  LEader = 5,
}

interface Parameters {
  first: number;
  id?: number[];
  alliance_id?: number[];
  alliance_position?: AlliancePosition;
  color?: string;
  created_after?: string;
  min_score?: number;
  max_score?: number;
  cities?: number;
  min_cities?: number;
  max_cities?: number;
  vmode?: boolean;
  page?: number;
}

/**
 * Get nation information in the query with the following paramters
 * @param {string} query The graphql query to get info with 
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Nation[]} The nations queried
 */
export default async function nationQuery(
  query: string,
  params: Parameters,
) {
  const argsToParamters = GraphQL.generateParamters(params as QueryNationsArgs);

  const res = await GraphQL.makeCall(`
    {
      nations(${argsToParamters}) {
        data {
          ${query}
        }
      }
    }
  `);

  return res.nations.data as Nation[];
}