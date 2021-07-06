import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#treasureQuery()', function(this: any) {
    it('should return a treasure with a name', async function() {
      const treasures = await pnwkit.treasureQuery(`name`);

      assert.strictEqual(typeof treasures[0].name, 'string');
    });
  });
}
