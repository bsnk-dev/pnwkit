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

/**
 * Get nation information in the query with the following paramters
 * @param {string} query The graphql query to get info with 
 * @param {number} first The first number of nations to retrieve, accepts values 1-500.
 * @param {number[]?} id
 * @param {number[]?} alliance_id
 * @param {AlliancePosition?} alliance_position
 * @param {string} color 
 * @param {string} created_after 
 * @param {number?} min_score 
 * @param {number?} max_score 
 * @param {number?} cities 
 * @param {number?} min_cities 
 * @param {number?} max_cities 
 * @param {boolean} vmode 
 * @param {number?} page 
 * @returns {Nation[]} The nations queried
 */
export default async function nationQuery(
  query: string,
  first: number,  
  id?: number[],
  alliance_id?: number[],
  alliance_position?: AlliancePosition,
  color?: string,
  created_after?: string,
  min_score?: number,
  max_score?: number,
  cities?: number,
  min_cities?: number,
  max_cities?: number,
  vmode?: boolean,
  page?: number
) {
  const args: QueryNationsArgs = {
    first,  
    id,
    alliance_id,
    alliance_position,
    color,
    created_after,
    min_score,
    max_score,
    cities,
    min_cities,
    max_cities,
    vmode,
    page
  }

  const argsToParamters = GraphQL.generateParamters(args);

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