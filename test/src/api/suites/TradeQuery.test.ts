import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe("#tradeQuery()", function(this: any) {
    it('should return at least one trade with a total $ amount', async function() {
      const trades = await pnwkit.tradeQuery({limit: 1}, `total`);
      
      assert.strictEqual(typeof trades[0].total, 'number');
    });
  });
}
