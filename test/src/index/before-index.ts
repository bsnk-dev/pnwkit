import {Kit} from '../../../src';
import testconfig from '../../testconfig.json';

before(function() {
  const pnwkit = new Kit();
  pnwkit.setKey(testconfig.apiKey);

  this.pnwkitFromClass = pnwkit;
});
