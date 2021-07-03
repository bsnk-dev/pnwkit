export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  DateTimeTz: any
}

export type Query = {
  __typename?: 'Query'
  nations?: Maybe<NationPaginator>
  alliances?: Maybe<AlliancePaginator>
  tradeprices?: Maybe<Array<Maybe<Tradeprice>>>
  trades?: Maybe<Array<Maybe<Trade>>>
  wars?: Maybe<Array<Maybe<War>>>
  treasures?: Maybe<Array<Maybe<Treasure>>>
  colors?: Maybe<Array<Maybe<Color>>>
}

export type QueryNationsArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  alliance_id?: Maybe<Array<Maybe<Scalars['Int']>>>
  alliance_position?: Maybe<Scalars['Int']>
  color?: Maybe<Scalars['String']>
  created_after?: Maybe<Scalars['Date']>
  min_score?: Maybe<Scalars['Float']>
  max_score?: Maybe<Scalars['Float']>
  cities?: Maybe<Scalars['Int']>
  min_cities?: Maybe<Scalars['Int']>
  max_cities?: Maybe<Scalars['Int']>
  vmode?: Maybe<Scalars['Boolean']>
  first: Scalars['Int']
  page?: Maybe<Scalars['Int']>
}

export type QueryAlliancesArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  first: Scalars['Int']
  page?: Maybe<Scalars['Int']>
}

export type QueryTradepricesArgs = {
  limit?: Maybe<Scalars['Int']>
}

export type QueryTradesArgs = {
  limit?: Maybe<Scalars['Int']>
  nation_id?: Maybe<Array<Maybe<Scalars['ID']>>>
  offer_resource?: Maybe<Scalars['String']>
  buy_or_sell?: Maybe<Scalars['String']>
  accepted?: Maybe<Scalars['Boolean']>
}

export type QueryWarsArgs = {
  id?: Maybe<Array<Maybe<Scalars['Int']>>>
  days_ago?: Maybe<Scalars['Int']>
  active?: Maybe<Scalars['Boolean']>
  nation_id?: Maybe<Array<Maybe<Scalars['ID']>>>
  alliance_id?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type AnyQuery = QueryNationsArgs | QueryAlliancesArgs | QueryTradepricesArgs | QueryTradesArgs | QueryWarsArgs;

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

export type Nation = {
  __typename?: 'Nation'
  [key: string]: any;
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
  population?: Maybe<Scalars['Int']>
  flag?: Maybe<Scalars['String']>
  vmode?: Maybe<Scalars['Int']>
  beigeturns?: Maybe<Scalars['Int']>
  last_active?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['DateTime']>
  soldiers?: Maybe<Scalars['Int']>
  tanks?: Maybe<Scalars['Int']>
  aircraft?: Maybe<Scalars['Int']>
  ships?: Maybe<Scalars['Int']>
  missiles?: Maybe<Scalars['Int']>
  nukes?: Maybe<Scalars['Int']>
  treasures: Array<Treasure>
  offensive_wars: Array<War>
  defensive_wars: Array<War>
  sent_bankrecs: Array<Bankrec>
  received_bankrecs: Array<Bankrec>
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
  acceptmem?: Maybe<Scalars['Boolean']>
  flag?: Maybe<Scalars['String']>
  forumlink?: Maybe<Scalars['String']>
  irclink?: Maybe<Scalars['String']>
  bankrecs?: Maybe<Array<Maybe<Bankrec>>>
  taxrecs?: Maybe<Array<Maybe<Bankrec>>>
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

export type Bankrec = {
  __typename?: 'Bankrec'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTime']>
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

export type City = {
  __typename?: 'City'
  [key: string]: any;
  id?: Maybe<Scalars['ID']>
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
  date?: Maybe<Scalars['DateTime']>
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
  date?: Maybe<Scalars['DateTime']>
  type?: Maybe<AttackType>
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

export type AlliancePaginator = {
  __typename?: 'AlliancePaginator'
  paginatorInfo: PaginatorInfo
  data: Array<Alliance>
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

export type Trade = {
  __typename?: 'Trade'
  id?: Maybe<Scalars['ID']>
  date?: Maybe<Scalars['DateTime']>
  sid?: Maybe<Scalars['ID']>
  rid?: Maybe<Scalars['ID']>
  sender?: Maybe<Nation>
  receiver?: Maybe<Nation>
  offer_resource?: Maybe<Scalars['String']>
  offer_amount?: Maybe<Scalars['Int']>
  buy_or_sell?: Maybe<Scalars['String']>
  total?: Maybe<Scalars['Int']>
  accepted?: Maybe<Scalars['Boolean']>
  date_accepted?: Maybe<Scalars['DateTime']>
}

export type Color = {
  __typename?: 'Color'
  color?: Maybe<Scalars['String']>
  bloc_name?: Maybe<Scalars['String']>
  turn_bonus?: Maybe<Scalars['Int']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
  total?: Maybe<Scalars['Int']>
  count?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  lastPage?: Maybe<Scalars['Int']>
}
