import NationQuery from './suites/NationQuery.test';
import AllianceQuery from './suites/AllianceQuery.test';
import TradePricesQuery from './suites/TradePricesQuery.test';
import WarQuery from './suites/WarQuery.test';
import TradeQuery from './suites/TradeQuery.test';
import TreasureQuery from './suites/TreasureQuery.test';
import ColorQuery from './suites/ColorQuery.test';
import BountyQuery from './suites/BountyQuery.test';

describe('api', function() {
  NationQuery.bind(this)();
  AllianceQuery.bind(this)();
  TradePricesQuery.bind(this)();
  TradeQuery.bind(this)();
  WarQuery.bind(this)();
  TreasureQuery.bind(this)();
  ColorQuery.bind(this)();
  BountyQuery.bind(this)();
});
