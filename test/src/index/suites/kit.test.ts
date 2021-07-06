import assert from 'assert';

export default function suite() {
  describe('Kit()', function(this: any) {
    it('should be able to retrieve a nation', async function() {
      const nations = await this.pnwkitFromClass.nationQuery(
          {first: 1, id: [100541]}, `
        nation_name
      `);

      assert.strictEqual(nations[0].nation_name, 'Blusania');
    });
  });
}
