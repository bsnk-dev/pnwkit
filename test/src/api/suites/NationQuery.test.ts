import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#nationQuery()', function(this: any) {
    it('should return a specific nation', async function() {
      const nations = await pnwkit.nationQuery(
          {first: 1, id: [100541]}, `
        nation_name
      `);

      assert.strictEqual(nations[0].nation_name, 'Blusania');
    });

    it('should return a specific nation when queried by name', async function() {
      const nations = await pnwkit.nationQuery(
          {first: 1, nation_name: ['Blusania']}, `
        nation_name
      `);

      assert.strictEqual(nations[0].nation_name, 'Blusania');
    });

    it('should return page information', async function() {
      const nations = await pnwkit.nationQuery(
          {first: 1, id: [100541]}, `
        nation_name
      `, true);

      assert.strictEqual(nations.paginatorInfo.currentPage, 1);
    });
  });
}
