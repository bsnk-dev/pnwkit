import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe("#warQuery()", function(this: any) {
    it('should return 1 war with an attacker id', async function() {
      const wars = await pnwkit.warQuery({days_ago: 0}, `attid`);

      assert.ok(typeof wars[0].attid == 'string');
    });
  });
}
