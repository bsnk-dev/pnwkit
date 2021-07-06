import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#allianceQuery()', function(this: any) {
    it('should return an alliance', async function() {
      const alliances = await pnwkit.allianceQuery(
          {first: 1}, `
        name
      `);

      assert.ok(Boolean(alliances[0].name));
    });

    it('should return page information', async function() {
      const alliances = await pnwkit.allianceQuery(
          {first: 1}, `
        name
      `, true);

      assert.strictEqual(alliances.paginatorInfo.currentPage, 1);
    });
  });
}
