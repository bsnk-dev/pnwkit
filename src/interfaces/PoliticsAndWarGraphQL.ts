export type AnyQuery =
  QueryNationsArgs |
  QueryAlliancesArgs |
  QueryTradepricesArgs |
  QueryTradesArgs |
  QueryWarsArgs |
  QueryBankrecsArgs |
  QueryBountiesArgs |
  QueryCitiesArgs |
  QueryWarattacksArgs;

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTimeAuto: any
  Date: any
  DateTime: any
  DateTimeTz: any
}

export type Query = {
  __typename?: 'Query'
  me?: Maybe<ApiKeyDetails>
  treasures?: Maybe<Array<Maybe<Treasure>>>
  colors?: Maybe<Array<Maybe<Color>>>
  game_info?: Maybe<GameInfo>
  nations?: Maybe<NationPaginator>
  alliances?: Maybe<AlliancePaginator>
  tradeprices?: Maybe<TradepricePaginator>
  trades?: Maybe<TradePaginator>
  wars?: Maybe<WarPaginator>
  bounties?: Maybe<BountyPaginator>
  warattacks?: Maybe<WarAttackPaginator>
  treaties?: Maybe<TreatyPaginator>
  cities?: Maybe<CityPaginator>
  bankrecs?: Maybe<BankrecPaginator>
  baseball_games?: Maybe<BbGamePaginator>
  baseball_teams?: Maybe<BbTeamPaginator>
  baseball_players?: Maybe<BbPlayerPaginator>
}

export type QueryNationsArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  nation_name?: Maybe<Array<Maybe<Scalars['String']>>>
  leader_name?: Maybe<Array<Maybe<Scalars['String']>>>
  alliance_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  alliance_position?: Maybe<Array<Maybe<Scalars['Int']>>>
  color?: Maybe<Scalars['String']>
  created_after?: Maybe<Scalars['DateTime']>
  min_score?: Maybe<Scalars['Float']>
  max_score?: Maybe<Scalars['Float']>
  cities?: Maybe<Array<Maybe<Scalars['Int']>>>
  min_cities?: Maybe<Scalars['Int']>
  max_cities?: Maybe<Scalars['Int']>
  vmode?: Maybe<Scalars['Boolean']>
  discord?: Maybe<Array<Maybe<Scalars['String']>>>
  orderBy?: Maybe<Array<QueryNationsOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryAlliancesArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  orderBy?: Maybe<Array<QueryAlliancesOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryTradepricesArgs = {
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryTradesArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  type?: Maybe<TradeType>
  nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  offer_resource?: Maybe<Scalars['String']>
  buy_or_sell?: Maybe<Scalars['String']>
  accepted?: Maybe<Scalars['Boolean']>
  orderBy?: Maybe<Array<QueryTradesOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryWarsArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  active?: Maybe<Scalars['Boolean']>
  nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  alliance_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  min_id?: Maybe<Scalars['Int']>
  max_id?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<QueryWarsOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryBountiesArgs = {
  nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  min_amount?: Maybe<Scalars['Float']>
  max_amount?: Maybe<Scalars['Float']>
  orderBy?: Maybe<Array<QueryBountiesOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryWarattacksArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  min_id?: Maybe<Scalars['Int']>
  max_id?: Maybe<Scalars['Int']>
  war_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  orderBy?: Maybe<Array<QueryWarattacksOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryTreatiesArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  limit?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<QueryTreatiesOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryCitiesArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  nation_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  orderBy?: Maybe<Array<QueryCitiesOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryBankrecsArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  stype?: Maybe<Array<Maybe<Scalars['Int']>>>
  rtype?: Maybe<Array<Maybe<Scalars['Int']>>>
  or_type?: Maybe<Array<Maybe<Scalars['Int']>>>
  sid?: Maybe<Array<Maybe<Scalars['Int']>>>
  rid?: Maybe<Array<Maybe<Scalars['Int']>>>
  or_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  orderBy?: Maybe<Array<QueryBankrecsOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryBaseball_GamesArgs = {
  team_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  orderBy?: Maybe<Array<QueryBaseballGamesOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryBaseball_TeamsArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  orderBy?: Maybe<Array<QueryBaseballTeamsOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type QueryBaseball_PlayersArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  team_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  orderBy?: Maybe<Array<QueryBaseballPlayersOrderByOrderByClause>>
  first?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type ApiKeyDetails = {
  __typename?: 'ApiKeyDetails'
  nation?: Maybe<Nation>
}

export type Nation = {
  __typename?: 'Nation'
  id?: Maybe<Scalars['ID']>
  alliance_id?: Maybe<Scalars['ID']>
  alliance_position?: Maybe<AlliancePosition>
  alliance?: Maybe<Alliance>
  nation_name?: Maybe<Scalars['String']>
  leader_name?: Maybe<Scalars['String']>
  continent?: Maybe<Scalars['String']>
  warpolicy?: Maybe<Scalars['String']>
  dompolicy?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['String']>
  num_cities?: Maybe<Scalars['Int']>
  cities: Array<City>
  score?: Maybe<Scalars['Float']>
  update_tz?: Maybe<Scalars['Float']>
  population?: Maybe<Scalars['Int']>
  flag?: Maybe<Scalars['String']>
  vmode?: Maybe<Scalars['Int']>
  beigeturns?: Maybe<Scalars['Int']>
  espionage_available?: Maybe<Scalars['Boolean']>
  last_active?: Maybe<Scalars['DateTimeAuto']>
  date?: Maybe<Scalars['DateTimeAuto']>
  soldiers?: Maybe<Scalars['Int']>
  tanks?: Maybe<Scalars['Int']>
  aircraft?: Maybe<Scalars['Int']>
  ships?: Maybe<Scalars['Int']>
  missiles?: Maybe<Scalars['Int']>
  nukes?: Maybe<Scalars['Int']>
  spies?: Maybe<Scalars['Int']>
  discord?: Maybe<Scalars['String']>
  treasures: Array<Treasure>
  /** @deprecated Use wars instead */
  offensive_wars: Array<War>
  /** @deprecated Use wars instead */
  defensive_wars: Array<War>
  wars: Array<War>
  /** @deprecated Use bankrecs instead */
  sent_bankrecs: Array<Bankrec>
  /** @deprecated Use bankrecs instead */
  received_bankrecs: Array<Bankrec>
  bankrecs?: Maybe<Array<Maybe<Bankrec>>>
  taxrecs?: Maybe<Array<Maybe<Bankrec>>>
  bounties?: Maybe<Array<Maybe<Bounty>>>
  turns_since_last_city?: Maybe<Scalars['Int']>
  turns_since_last_project?: Maybe<Scalars['Int']>
  money?: Maybe<Scalars['Float']>
  coal?: Maybe<Scalars['Float']>
  oil?: Maybe<Scalars['Float']>
  uranium?: Maybe<Scalars['Float']>
  iron?: Maybe<Scalars['Float']>
  bauxite?: Maybe<Scalars['Float']>
  lead?: Maybe<Scalars['Float']>
  gasoline?: Maybe<Scalars['Float']>
  munitions?: Maybe<Scalars['Float']>
  steel?: Maybe<Scalars['Float']>
  aluminum?: Maybe<Scalars['Float']>
  food?: Maybe<Scalars['Float']>
  projects?: Maybe<Scalars['Int']>
  project_bits?: Maybe<Scalars['Int']>
  ironw?: Maybe<Scalars['Boolean']>
  bauxitew?: Maybe<Scalars['Boolean']>
  armss?: Maybe<Scalars['Boolean']>
  egr?: Maybe<Scalars['Boolean']>
  massirr?: Maybe<Scalars['Boolean']>
  itc?: Maybe<Scalars['Boolean']>
  mlp?: Maybe<Scalars['Boolean']>
  nrf?: Maybe<Scalars['Boolean']>
  irond?: Maybe<Scalars['Boolean']>
  vds?: Maybe<Scalars['Boolean']>
  cia?: Maybe<Scalars['Boolean']>
  cfce?: Maybe<Scalars['Boolean']>
  propb?: Maybe<Scalars['Boolean']>
  uap?: Maybe<Scalars['Boolean']>
  city_planning?: Maybe<Scalars['Boolean']>
  adv_city_planning?: Maybe<Scalars['Boolean']>
  space_program?: Maybe<Scalars['Boolean']>
  spy_satellite?: Maybe<Scalars['Boolean']>
  moon_landing?: Maybe<Scalars['Boolean']>
  pirate_economy?: Maybe<Scalars['Boolean']>
  recycling_initiative?: Maybe<Scalars['Boolean']>
  telecom_satellite?: Maybe<Scalars['Boolean']>
  green_tech?: Maybe<Scalars['Boolean']>
  arable_land_agency?: Maybe<Scalars['Boolean']>
  clinical_research_center?: Maybe<Scalars['Boolean']>
  specialized_police_training?: Maybe<Scalars['Boolean']>
  adv_engineering_corps?: Maybe<Scalars['Boolean']>
  wars_won?: Maybe<Scalars['Int']>
  wars_lost?: Maybe<Scalars['Int']>
  tax_id?: Maybe<Scalars['ID']>
  alliance_seniority?: Maybe<Scalars['Int']>
}

export enum AlliancePosition {
  Noalliance = 'NOALLIANCE',
  Applicant = 'APPLICANT',
  Member = 'MEMBER',
  Officer = 'OFFICER',
  Heir = 'HEIR',
  Leader = 'LEADER'
}

export type Alliance = {
  __typename?: 'Alliance'
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  acronym?: Maybe<Scalars['String']>
  score?: Maybe<Scalars['Float']>
  color?: Maybe<Scalars['String']>
  nations: Array<Nation>
  /** @deprecated Use treaties instead */
  sent_treaties: Array<Treaty>
  /** @deprecated Use treaties instead */
  received_treaties: Array<Treaty>
  treaties: Array<Treaty>
  acceptmem?: Maybe<Scalars['Boolean']>
  flag?: Maybe<Scalars['String']>
  forumlink?: Maybe<Scalars['String']>
  irclink?: Maybe<Scalars['String']>
  bankrecs?: Maybe<Array<Maybe<Bankrec>>>
  taxrecs?: Maybe<Array<Maybe<Bankrec>>>
  tax_brackets?: Maybe<Array<Maybe<TaxBracket>>>
  money?: Maybe<Scalars['Float']>
  coal?: Maybe<Scalars['Float']>
  oil?: Maybe<Scalars['Float']>
  uranium?: Maybe<Scalars['Float']>
  iron?: Maybe<Scalars['Float']>
  bauxite?: Maybe<Scalars['Float']>
  lead?: Maybe<Scalars['Float']>
  gasoline?: Maybe<Scalars['Float']>
  munitions?: Maybe<Scalars['Float']>
  steel?: Maybe<Scalars['Float']>
  aluminum?: Maybe<Scalars['Float']>
  food?: Maybe<Scalars['Float']>
}

export type Treaty = {
  __typename?: 'Treaty'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  treaty_type?: Maybe<Scalars['String']>
  turns_left?: Maybe<Scalars['Int']>
  alliance1_id?: Maybe<Scalars['ID']>
  alliance1?: Maybe<Alliance>
  alliance2_id?: Maybe<Scalars['ID']>
  alliance2?: Maybe<Alliance>
}

export type Bankrec = {
  __typename?: 'Bankrec'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  sid?: Maybe<Scalars['ID']>
  stype?: Maybe<Scalars['Int']>
  rid?: Maybe<Scalars['ID']>
  rtype?: Maybe<Scalars['Int']>
  pid?: Maybe<Scalars['ID']>
  note?: Maybe<Scalars['String']>
  money?: Maybe<Scalars['Float']>
  coal?: Maybe<Scalars['Float']>
  oil?: Maybe<Scalars['Float']>
  uranium?: Maybe<Scalars['Float']>
  iron?: Maybe<Scalars['Float']>
  bauxite?: Maybe<Scalars['Float']>
  lead?: Maybe<Scalars['Float']>
  gasoline?: Maybe<Scalars['Float']>
  munitions?: Maybe<Scalars['Float']>
  steel?: Maybe<Scalars['Float']>
  aluminum?: Maybe<Scalars['Float']>
  food?: Maybe<Scalars['Float']>
  tax_id?: Maybe<Scalars['ID']>
}

export type TaxBracket = {
  __typename?: 'TaxBracket'
  id?: Maybe<Scalars['ID']>
  alliance_id?: Maybe<Scalars['ID']>
  alliance?: Maybe<Alliance>
  date?: Maybe<Scalars['DateTimeAuto']>
  date_modified?: Maybe<Scalars['DateTimeAuto']>
  last_modifier_id?: Maybe<Scalars['ID']>
  last_modifier?: Maybe<Nation>
  tax_rate?: Maybe<Scalars['Int']>
  resource_tax_rate?: Maybe<Scalars['Int']>
  bracket_name?: Maybe<Scalars['String']>
}

export type City = {
  __typename?: 'City'
  id?: Maybe<Scalars['ID']>
  nation_id?: Maybe<Scalars['ID']>
  nation?: Maybe<Nation>
  name?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  infrastructure?: Maybe<Scalars['Float']>
  land?: Maybe<Scalars['Float']>
  powered?: Maybe<Scalars['Boolean']>
  oilpower?: Maybe<Scalars['Int']>
  windpower?: Maybe<Scalars['Int']>
  coalpower?: Maybe<Scalars['Int']>
  nuclearpower?: Maybe<Scalars['Int']>
  coalmine?: Maybe<Scalars['Int']>
  oilwell?: Maybe<Scalars['Int']>
  uramine?: Maybe<Scalars['Int']>
  barracks?: Maybe<Scalars['Int']>
  farm?: Maybe<Scalars['Int']>
  policestation?: Maybe<Scalars['Int']>
  hospital?: Maybe<Scalars['Int']>
  recyclingcenter?: Maybe<Scalars['Int']>
  subway?: Maybe<Scalars['Int']>
  supermarket?: Maybe<Scalars['Int']>
  bank?: Maybe<Scalars['Int']>
  mall?: Maybe<Scalars['Int']>
  stadium?: Maybe<Scalars['Int']>
  leadmine?: Maybe<Scalars['Int']>
  ironmine?: Maybe<Scalars['Int']>
  bauxitemine?: Maybe<Scalars['Int']>
  gasrefinery?: Maybe<Scalars['Int']>
  aluminumrefinery?: Maybe<Scalars['Int']>
  steelmill?: Maybe<Scalars['Int']>
  munitionsfactory?: Maybe<Scalars['Int']>
  factory?: Maybe<Scalars['Int']>
  airforcebase?: Maybe<Scalars['Int']>
  drydock?: Maybe<Scalars['Int']>
  nukedate?: Maybe<Scalars['DateTimeAuto']>
}

export type Treasure = {
  __typename?: 'Treasure'
  name?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['String']>
  continent?: Maybe<Scalars['String']>
  bonus?: Maybe<Scalars['Int']>
  spawndate?: Maybe<Scalars['Date']>
  nation?: Maybe<Nation>
}

export type War = {
  __typename?: 'War'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  reason?: Maybe<Scalars['String']>
  war_type?: Maybe<WarType>
  groundcontrol?: Maybe<Scalars['ID']>
  airsuperiority?: Maybe<Scalars['ID']>
  navalblockade?: Maybe<Scalars['ID']>
  winner?: Maybe<Scalars['ID']>
  attacks: Array<WarAttack>
  turnsleft?: Maybe<Scalars['Int']>
  attid?: Maybe<Scalars['ID']>
  att_alliance_id?: Maybe<Scalars['ID']>
  attacker?: Maybe<Nation>
  defid?: Maybe<Scalars['ID']>
  def_alliance_id?: Maybe<Scalars['ID']>
  defender?: Maybe<Nation>
  attpoints?: Maybe<Scalars['Int']>
  defpoints?: Maybe<Scalars['Int']>
  attpeace?: Maybe<Scalars['Boolean']>
  defpeace?: Maybe<Scalars['Boolean']>
  att_resistance?: Maybe<Scalars['Int']>
  def_resistance?: Maybe<Scalars['Int']>
  att_fortify?: Maybe<Scalars['Boolean']>
  def_fortify?: Maybe<Scalars['Boolean']>
  att_gas_used?: Maybe<Scalars['Float']>
  def_gas_used?: Maybe<Scalars['Float']>
  att_mun_used?: Maybe<Scalars['Float']>
  def_mun_used?: Maybe<Scalars['Float']>
  att_alum_used?: Maybe<Scalars['Int']>
  def_alum_used?: Maybe<Scalars['Int']>
  att_steel_used?: Maybe<Scalars['Int']>
  def_steel_used?: Maybe<Scalars['Int']>
  att_infra_destroyed?: Maybe<Scalars['Float']>
  def_infra_destroyed?: Maybe<Scalars['Float']>
  att_money_looted?: Maybe<Scalars['Float']>
  def_money_looted?: Maybe<Scalars['Float']>
  att_soldiers_killed?: Maybe<Scalars['Int']>
  def_soldiers_killed?: Maybe<Scalars['Int']>
  att_tanks_killed?: Maybe<Scalars['Int']>
  def_tanks_killed?: Maybe<Scalars['Int']>
  att_aircraft_killed?: Maybe<Scalars['Int']>
  def_aircraft_killed?: Maybe<Scalars['Int']>
  att_ships_killed?: Maybe<Scalars['Int']>
  def_ships_killed?: Maybe<Scalars['Int']>
  att_missiles_used?: Maybe<Scalars['Int']>
  def_missiles_used?: Maybe<Scalars['Int']>
  att_nukes_used?: Maybe<Scalars['Int']>
  def_nukes_used?: Maybe<Scalars['Int']>
  att_infra_destroyed_value?: Maybe<Scalars['Float']>
  def_infra_destroyed_value?: Maybe<Scalars['Float']>
}

export enum WarType {
  Ordinary = 'ORDINARY',
  Attrition = 'ATTRITION',
  Raid = 'RAID'
}

export type WarAttack = {
  __typename?: 'WarAttack'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  attid?: Maybe<Scalars['ID']>
  attacker?: Maybe<Nation>
  defid?: Maybe<Scalars['ID']>
  defender?: Maybe<Nation>
  type?: Maybe<AttackType>
  warid?: Maybe<Scalars['ID']>
  war?: Maybe<War>
  victor?: Maybe<Scalars['ID']>
  success?: Maybe<Scalars['Int']>
  attcas1?: Maybe<Scalars['Int']>
  defcas1?: Maybe<Scalars['Int']>
  attcas2?: Maybe<Scalars['Int']>
  defcas2?: Maybe<Scalars['Int']>
  cityid?: Maybe<Scalars['ID']>
  infradestroyed?: Maybe<Scalars['Float']>
  improvementslost?: Maybe<Scalars['Int']>
  moneystolen?: Maybe<Scalars['Float']>
  loot_info?: Maybe<Scalars['String']>
  resistance_eliminated?: Maybe<Scalars['Int']>
  city_infra_before?: Maybe<Scalars['Float']>
  infra_destroyed_value?: Maybe<Scalars['Float']>
  att_mun_used?: Maybe<Scalars['Float']>
  def_mun_used?: Maybe<Scalars['Float']>
  att_gas_used?: Maybe<Scalars['Float']>
  def_gas_used?: Maybe<Scalars['Float']>
  aircraft_killed_by_tanks?: Maybe<Scalars['Int']>
}

export enum AttackType {
  Airvinfra = 'AIRVINFRA',
  Airvsoldiers = 'AIRVSOLDIERS',
  Airvtanks = 'AIRVTANKS',
  Airvmoney = 'AIRVMONEY',
  Airvships = 'AIRVSHIPS',
  Airvair = 'AIRVAIR',
  Ground = 'GROUND',
  Missile = 'MISSILE',
  Missilefail = 'MISSILEFAIL',
  Nuke = 'NUKE',
  Nukefail = 'NUKEFAIL',
  Naval = 'NAVAL',
  Fortify = 'FORTIFY',
  Peace = 'PEACE',
  Victory = 'VICTORY',
  Allianceloot = 'ALLIANCELOOT'
}

export type Bounty = {
  __typename?: 'Bounty'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['Date']>
  nation_id?: Maybe<Scalars['ID']>
  nation?: Maybe<Nation>
  amount?: Maybe<Scalars['Int']>
  war_type?: Maybe<WarType>
}

export type Color = {
  __typename?: 'Color'
  color?: Maybe<Scalars['String']>
  bloc_name?: Maybe<Scalars['String']>
  turn_bonus?: Maybe<Scalars['Int']>
}

export type GameInfo = {
  __typename?: 'GameInfo'
  game_date?: Maybe<Scalars['DateTimeAuto']>
  radiation?: Maybe<Radiation>
}

export type Radiation = {
  __typename?: 'Radiation'
  global?: Maybe<Scalars['Float']>
  north_america?: Maybe<Scalars['Float']>
  south_america?: Maybe<Scalars['Float']>
  europe?: Maybe<Scalars['Float']>
  africa?: Maybe<Scalars['Float']>
  asia?: Maybe<Scalars['Float']>
  australia?: Maybe<Scalars['Float']>
  antarctica?: Maybe<Scalars['Float']>
}

export type QueryNationsOrderByOrderByClause = {
  column: QueryNationsOrderByColumn
  order: SortOrder
}

export enum QueryNationsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Soldiers = 'SOLDIERS',
  Tanks = 'TANKS',
  Aircraft = 'AIRCRAFT',
  Ships = 'SHIPS',
  Missiles = 'MISSILES',
  Nukes = 'NUKES'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type NationPaginator = {
  __typename?: 'NationPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Nation>
}

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo'
  count: Scalars['Int']
  currentPage: Scalars['Int']
  firstItem?: Maybe<Scalars['Int']>
  hasMorePages: Scalars['Boolean']
  lastItem?: Maybe<Scalars['Int']>
  lastPage: Scalars['Int']
  perPage: Scalars['Int']
  total: Scalars['Int']
}

export type QueryAlliancesOrderByOrderByClause = {
  column: QueryAlliancesOrderByColumn
  order: SortOrder
}

export enum QueryAlliancesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Score = 'SCORE'
}

export type AlliancePaginator = {
  __typename?: 'AlliancePaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Alliance>
}

export type TradepricePaginator = {
  __typename?: 'TradepricePaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Tradeprice>
}

export type Tradeprice = {
  __typename?: 'Tradeprice'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['Date']>
  coal?: Maybe<Scalars['Float']>
  oil?: Maybe<Scalars['Float']>
  uranium?: Maybe<Scalars['Float']>
  iron?: Maybe<Scalars['Float']>
  bauxite?: Maybe<Scalars['Float']>
  lead?: Maybe<Scalars['Float']>
  gasoline?: Maybe<Scalars['Float']>
  munitions?: Maybe<Scalars['Float']>
  steel?: Maybe<Scalars['Float']>
  aluminum?: Maybe<Scalars['Float']>
  food?: Maybe<Scalars['Float']>
  credits?: Maybe<Scalars['Float']>
}

export enum TradeType {
  Global = 'GLOBAL',
  Personal = 'PERSONAL',
  Alliance = 'ALLIANCE'
}

export type QueryTradesOrderByOrderByClause = {
  column: QueryTradesOrderByColumn
  order: SortOrder
}

export enum QueryTradesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  OfferResource = 'OFFER_RESOURCE',
  OfferAmount = 'OFFER_AMOUNT'
}

export type TradePaginator = {
  __typename?: 'TradePaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Trade>
}

export type Trade = {
  __typename?: 'Trade'
  id?: Maybe<Scalars['ID']>
  type?: Maybe<TradeType>
  date?: Maybe<Scalars['DateTimeAuto']>
  sid?: Maybe<Scalars['ID']>
  rid?: Maybe<Scalars['ID']>
  sender?: Maybe<Nation>
  receiver?: Maybe<Nation>
  offer_resource?: Maybe<Scalars['String']>
  offer_amount?: Maybe<Scalars['Int']>
  buy_or_sell?: Maybe<Scalars['String']>
  total?: Maybe<Scalars['Int']>
  accepted?: Maybe<Scalars['Boolean']>
  date_accepted?: Maybe<Scalars['DateTimeAuto']>
}

export type QueryWarsOrderByOrderByClause = {
  column: QueryWarsOrderByColumn
  order: SortOrder
}

export enum QueryWarsOrderByColumn {
  Id = 'ID',
  Date = 'DATE'
}

export type WarPaginator = {
  __typename?: 'WarPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<War>
}

export type QueryBountiesOrderByOrderByClause = {
  column: QueryBountiesOrderByColumn
  order: SortOrder
}

export enum QueryBountiesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Amount = 'AMOUNT'
}

export type BountyPaginator = {
  __typename?: 'BountyPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Bounty>
}

export type QueryWarattacksOrderByOrderByClause = {
  column: QueryWarattacksOrderByColumn
  order: SortOrder
}

export enum QueryWarattacksOrderByColumn {
  Id = 'ID',
  Date = 'DATE'
}

export type WarAttackPaginator = {
  __typename?: 'WarAttackPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<WarAttack>
}

export type QueryTreatiesOrderByOrderByClause = {
  column: QueryTreatiesOrderByColumn
  order: SortOrder
}

export enum QueryTreatiesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  TurnsLeft = 'TURNS_LEFT'
}

export type TreatyPaginator = {
  __typename?: 'TreatyPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Treaty>
}

export type QueryCitiesOrderByOrderByClause = {
  column: QueryCitiesOrderByColumn
  order: SortOrder
}

export enum QueryCitiesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Infrastructure = 'INFRASTRUCTURE',
  Maxinfra = 'MAXINFRA',
  Land = 'LAND'
}

export type CityPaginator = {
  __typename?: 'CityPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<City>
}

export type QueryBankrecsOrderByOrderByClause = {
  column: QueryBankrecsOrderByColumn
  order: SortOrder
}

export enum QueryBankrecsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Money = 'MONEY',
  Coal = 'COAL',
  Oil = 'OIL',
  Uranium = 'URANIUM',
  Iron = 'IRON',
  Bauxite = 'BAUXITE',
  Lead = 'LEAD',
  Gasoline = 'GASOLINE',
  Munitions = 'MUNITIONS',
  Steel = 'STEEL',
  Aluminum = 'ALUMINUM',
  Food = 'FOOD'
}

export type BankrecPaginator = {
  __typename?: 'BankrecPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Bankrec>
}

export type QueryBaseballGamesOrderByOrderByClause = {
  column: QueryBaseballGamesOrderByColumn
  order: SortOrder
}

export enum QueryBaseballGamesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Htscore = 'HTSCORE',
  Atscore = 'ATSCORE'
}

export type BbGamePaginator = {
  __typename?: 'BBGamePaginator'
  paginatorInfo: PaginatorInfo
  data: Array<BbGame>
}

export type BbGame = {
  __typename?: 'BBGame'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  home_id?: Maybe<Scalars['ID']>
  away_id?: Maybe<Scalars['ID']>
  home_team?: Maybe<BbTeam>
  away_team?: Maybe<BbTeam>
  home_nation_id?: Maybe<Scalars['ID']>
  away_nation_id?: Maybe<Scalars['ID']>
  home_nation?: Maybe<Nation>
  away_nation?: Maybe<Nation>
  stadium_name?: Maybe<Scalars['String']>
  home_score?: Maybe<Scalars['Int']>
  away_score?: Maybe<Scalars['Int']>
  sim_text?: Maybe<Scalars['String']>
  highlights?: Maybe<Scalars['String']>
  home_revenue?: Maybe<Scalars['Float']>
  spoils?: Maybe<Scalars['Float']>
  open?: Maybe<Scalars['Int']>
  wager?: Maybe<Scalars['Float']>
}

export type BbTeam = {
  __typename?: 'BBTeam'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  nation_id?: Maybe<Scalars['ID']>
  nation?: Maybe<Nation>
  name?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  home_jersey?: Maybe<Scalars['String']>
  away_jersey?: Maybe<Scalars['String']>
  stadium?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  seating?: Maybe<Scalars['Int']>
  rating?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
  glosses?: Maybe<Scalars['Int']>
  runs?: Maybe<Scalars['Int']>
  homers?: Maybe<Scalars['Int']>
  strikeouts?: Maybe<Scalars['Int']>
  games_played?: Maybe<Scalars['Int']>
  games?: Maybe<Array<Maybe<BbGame>>>
  players?: Maybe<Array<Maybe<BbPlayer>>>
}

export type BbPlayer = {
  __typename?: 'BBPlayer'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTimeAuto']>
  nation_id?: Maybe<Scalars['ID']>
  nation?: Maybe<Nation>
  team_id?: Maybe<Scalars['ID']>
  team?: Maybe<BbTeam>
  name?: Maybe<Scalars['String']>
  age?: Maybe<Scalars['Int']>
  position?: Maybe<Scalars['String']>
  pitching?: Maybe<Scalars['Float']>
  batting?: Maybe<Scalars['Float']>
  speed?: Maybe<Scalars['Float']>
  awareness?: Maybe<Scalars['Float']>
  overall?: Maybe<Scalars['Float']>
  birthday?: Maybe<Scalars['Int']>
}

export type QueryBaseballTeamsOrderByOrderByClause = {
  column: QueryBaseballTeamsOrderByColumn
  order: SortOrder
}

export enum QueryBaseballTeamsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Quality = 'QUALITY',
  Seating = 'SEATING',
  Rating = 'RATING',
  Wins = 'WINS',
  Glosses = 'GLOSSES',
  Runs = 'RUNS',
  Homers = 'HOMERS',
  Strikeouts = 'STRIKEOUTS',
  Games = 'GAMES'
}

export type BbTeamPaginator = {
  __typename?: 'BBTeamPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<BbTeam>
}

export type QueryBaseballPlayersOrderByOrderByClause = {
  column: QueryBaseballPlayersOrderByColumn
  order: SortOrder
}

export enum QueryBaseballPlayersOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Age = 'AGE',
  Pitching = 'PITCHING',
  Batting = 'BATTING',
  Speed = 'SPEED',
  Awareness = 'AWARENESS',
  Overall = 'OVERALL'
}

export type BbPlayerPaginator = {
  __typename?: 'BBPlayerPaginator'
  paginatorInfo: PaginatorInfo
  data: Array<BbPlayer>
}

export type Mutation = {
  __typename?: 'Mutation'
  bankDeposit: Bankrec
  bankWithdraw: Bankrec
}

export type MutationBankDepositArgs = {
  money?: Maybe<Scalars['Float']>
  coal?: Maybe<Scalars['Float']>
  oil?: Maybe<Scalars['Float']>
  uranium?: Maybe<Scalars['Float']>
  iron?: Maybe<Scalars['Float']>
  bauxite?: Maybe<Scalars['Float']>
  lead?: Maybe<Scalars['Float']>
  gasoline?: Maybe<Scalars['Float']>
  munitions?: Maybe<Scalars['Float']>
  steel?: Maybe<Scalars['Float']>
  aluminum?: Maybe<Scalars['Float']>
  food?: Maybe<Scalars['Float']>
  note?: Maybe<Scalars['String']>
}

export type MutationBankWithdrawArgs = {
  receiver: Scalars['ID']
  receiver_type: Scalars['Int']
  money?: Maybe<Scalars['Float']>
  coal?: Maybe<Scalars['Float']>
  oil?: Maybe<Scalars['Float']>
  uranium?: Maybe<Scalars['Float']>
  iron?: Maybe<Scalars['Float']>
  bauxite?: Maybe<Scalars['Float']>
  lead?: Maybe<Scalars['Float']>
  gasoline?: Maybe<Scalars['Float']>
  munitions?: Maybe<Scalars['Float']>
  steel?: Maybe<Scalars['Float']>
  aluminum?: Maybe<Scalars['Float']>
  food?: Maybe<Scalars['Float']>
  note?: Maybe<Scalars['String']>
}

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo'
  count: Scalars['Int']
  currentPage: Scalars['Int']
  firstItem?: Maybe<Scalars['Int']>
  lastItem?: Maybe<Scalars['Int']>
  perPage: Scalars['Int']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
  total: Scalars['Int']
  count: Scalars['Int']
  currentPage: Scalars['Int']
  lastPage: Scalars['Int']
}

export enum OrderByRelationAggregateFunction {
  Count = 'COUNT'
}

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Min = 'MIN',
  Max = 'MAX',
  Sum = 'SUM',
  Count = 'COUNT'
}

export type OrderByClause = {
  column: Scalars['String']
  order: SortOrder
}
