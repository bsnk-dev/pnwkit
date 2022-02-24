import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#bankRecordsQuery()', function(this: any) {
    it('should return at least one bank record with an id', async function() {
      const records = await pnwkit.bankRecordsQuery({first: 1}, `id`);

      assert.ok(typeof records[0].id);
    });
  });
}
