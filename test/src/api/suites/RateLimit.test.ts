import assert from 'assert';
import pnwkit from '../../../../src';

export default function suite() {
  describe('#rateLimit', function(this: any) {
    it('should return non-zero rate limit data', async function() {
      const rateLimitData = pnwkit.rateLimit;
      assert.ok(rateLimitData.limit > 0 && rateLimitData.resetAfterSeconds > 0 && rateLimitData.reset > 0);
    });
  });
}
