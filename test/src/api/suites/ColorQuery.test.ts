import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#colorQuery()', function(this: any) {
    it('should return a color bloc with a color', async function() {
      const colors = await pnwkit.colorQuery(`color`);

      assert.strictEqual(typeof colors[0].color, 'string');
    });
  });
}
