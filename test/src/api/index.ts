import NationQuery from './suites/NationQuery.test';
import AllianceQuery from './suites/AllianceQuery.test';
import TradePricesQuery from './suites/TradePricesQuery.test';

describe('api', function() {
  NationQuery.bind(this)();
  AllianceQuery.bind(this)();
  TradePricesQuery.bind(this)();
});
