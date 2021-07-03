import pnwkit from '../../../src';
import testconfig from '../../testconfig.json';

before(function() {
  pnwkit.setKey(testconfig.apiKey);
});
