import assert from 'assert';
import {Suite} from 'mocha';
import pnwkit from '../../../../src';

// eslint-disable-next-line
const memProfile = require('memoizee/profile');

export default function suite() {
  describe('Kit()', function(this: Suite) {
    it('should be able to retrieve a nation', async function() {
      const nations = await this.pnwkitFromClass.nationQuery(
          {first: 1, id: [100541]}, `
        nation_name
      `);

      assert.strictEqual(nations[0].nation_name, 'Blusania');
    });

    it('should be able to cache a call', async function() {
      const cachableNationCall = pnwkit.cached(
          pnwkit.nationQuery,
          0.5,
      );

      const init = await cachableNationCall(
          {first: 1, id: [100541]}, 'nation_name');


      const cached = await cachableNationCall(
          {first: 1, id: [100541]}, 'nation_name');

      assert.strictEqual(memProfile.statistics[Object.keys(memProfile.statistics)[0]].cached, 1);
      assert.strictEqual(JSON.stringify(init), JSON.stringify(cached));
    });

    it('should export #nationQuery() and #setKey() from a require call', function() {
      // eslint-disable-next-line
      const {nationQuery, setKey} = require('../../../../src');

      assert.strictEqual(typeof nationQuery, 'function');
      assert.strictEqual(typeof setKey, 'function');
    });
  });
}
