import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#cityQuery()', function(this: any) {
    it('should return at least one city with a name', async function() {
      const cities = await pnwkit.cityQuery({
        first: 1,
      }, `name`);

      assert.ok(cities[0].name);
    });
  });
}
