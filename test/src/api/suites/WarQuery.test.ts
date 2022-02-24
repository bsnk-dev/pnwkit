import assert from 'assert';
import pnwkit from '../../../../src';
import {QueryWarsOrderByColumn, SortOrder} from '../../../../src/interfaces/PoliticsAndWarGraphQL';

export default function suite() {
  describe('#warQuery()', function(this: any) {
    it('should return 1 war with an attacker id', async function() {
      const wars = await pnwkit.warQuery({first: 1, orderBy: {order: SortOrder.Desc, column: QueryWarsOrderByColumn.Date}}, `attid`);

      assert.ok(typeof wars[0].attid == 'string');
    });
  });
}
