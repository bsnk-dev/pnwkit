import assert from 'assert';

export default function suite() {
  describe('#function()', function(this: any) {
    it('should have its template filled in', function(done) {
      // you can call this.{...} whatever stuff here that you put in before*.ts
      assert.ok(false);
    });
  });
}
