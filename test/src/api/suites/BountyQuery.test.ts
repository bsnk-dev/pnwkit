import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#bountyQuery()', function(this: any) {
    it('should return bounties', async function() {
      const bounties = await pnwkit.bountyQuery(
          {first: 2},
          `id`,
      );

      assert.ok(bounties[0].id);
    });

    it('should return page information', async function() {
      const bounties = await pnwkit.bountyQuery(
          {first: 1}, `
        id
      `, true);

      assert.strictEqual(bounties.paginatorInfo.currentPage, 1);
    });
  });
}
