import assert from 'assert';
import pnwkit from '../../../../../src';

export default function suite() {
  describe("#nationQuery()", function(this: any) {
    it('should return a specific nation', async function() {
      const nations = await pnwkit.nationQuery(
        `
          nation_name
        `, {first: 1, id: [100541]});

      assert.strictEqual(nations[0].nation_name, 'Blusania');
    });
  });
}
