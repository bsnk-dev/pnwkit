export interface ResponseAndMetadataI {
  rateLimit: RateLimitI;
  data: any;
}

export interface RateLimitI {
  // The number of seconds until the rate limit resets.
  resetAfterSeconds: number;
  // The maximum number of requests per rate limit period.
  limit: number;
  //  The remaining number of requests before the rate limit is reached.
  //  If this reaches zero you should wait the number of seconds in
  //  X-RateLimit-Reset-After before attempting another request.
  remaining: number;
  // The unix timestamp at which point the rate limit resets.
  reset: number;
}
