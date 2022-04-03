import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#tradeQuery()', function(this: any) {
    it('should return at least one trade with a total $ amount', async function() {
      const trades = await pnwkit.tradeQuery({first: 1}, `total`);

      assert.strictEqual(typeof trades[0].total, 'number');
    });

    it('should allow you to specify the trade type', async function() {
      const trades = await pnwkit.tradeQuery({first: 1, type: 'GLOBAL'}, `total`);

      assert.strictEqual(typeof trades[0].total, 'number');
    });
  });
}
