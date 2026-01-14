const Limit = 3;
const WindowMs = 10 * 60 * 1000;
export function createRateLimiter(
  limit: number = Limit,
  windowMs: number = WindowMs
) {
  const timestamps = new Map<string, number[]>();

  return {
    check: (key: string): boolean => {
      const now = Date.now();
      const userTimestamps = timestamps.get(key) || [];

      // Filter out old timestamps
      const validTimestamps = userTimestamps.filter((t) => now - t < windowMs);

      if (validTimestamps.length >= limit) {
        return false;
      }

      validTimestamps.push(now);
      timestamps.set(key, validTimestamps);
      return true;
    },
  };
}
