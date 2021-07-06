import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#tradePricesQuery()', function(this: any) {
    it('should return a price for food', async function() {
      const tradeprices = await pnwkit.tradePricesQuery({}, `food`);

      assert.ok(typeof tradeprices[0].food == 'number');
    });
  });
}
