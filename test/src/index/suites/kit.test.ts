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

      await cachableNationCall(
          {first: 1, id: [100541]}, 'nation_name');

      await new Promise((resolve, reject) => {
        setTimeout(async () => {
          await cachableNationCall(
              {first: 1, id: [100541]}, 'nation_name');

          resolve(undefined);
        }, 2500);
      });

      assert.strictEqual(memProfile.statistics[Object.keys(memProfile.statistics)[0]].cached, 1);
    });
  });
}
