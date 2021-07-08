import nationQuery from './endpoints/NationQuery';
import allianceQuery from './endpoints/AllianceQuery';
import tradePricesQuery from './endpoints/TradePricesQuery';
import warQuery from './endpoints/WarQuery';
import tradeQuery from './endpoints/TradeQuery';
import treasureQuery from './endpoints/TreasureQuery';
import colorQuery from './endpoints/ColorQuery';

export default class PnwKitAPI {
  nationQuery = nationQuery;
  allianceQuery = allianceQuery;
  tradePricesQuery = tradePricesQuery;
  warQuery = warQuery;
  tradeQuery = tradeQuery;
  treasureQuery = treasureQuery;
  colorQuery = colorQuery;
}

/* export type AnyQueryFunction =
  typeof nationQuery |
  typeof allianceQuery |
  typeof tradePricesQuery |
  typeof warQuery |
  typeof tradeQuery |
  typeof treasureQuery |
  typeof colorQuery;
*/
