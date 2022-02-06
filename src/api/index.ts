import nationQuery from './endpoints/NationQuery';
import allianceQuery from './endpoints/AllianceQuery';
import tradePricesQuery from './endpoints/TradePricesQuery';
import warQuery from './endpoints/WarQuery';
import tradeQuery from './endpoints/TradeQuery';
import treasureQuery from './endpoints/TreasureQuery';
import colorQuery from './endpoints/ColorQuery';
import bankRecordsQuery from './endpoints/BankRecordsQuery';
import bountyQuery from './endpoints/BountyQuery';
import cityQuery from './endpoints/CityQuery';

export default class PnwKitAPI {
  nationQuery = nationQuery;
  allianceQuery = allianceQuery;
  tradePricesQuery = tradePricesQuery;
  warQuery = warQuery;
  tradeQuery = tradeQuery;
  treasureQuery = treasureQuery;
  colorQuery = colorQuery;
  bankRecordsQuery = bankRecordsQuery;
  bountyQuery = bountyQuery;
  cityQuery = cityQuery;
}
