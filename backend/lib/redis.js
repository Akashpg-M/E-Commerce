import dotenv from 'dotenv';
dotenv.config();
import { Redis } from '@upstash/redis';

// Log environment variables for debugging (optional)
console.log('Redis URL:', process.env.UPSTASH_REDIS_URL);
console.log('Redis Token:', process.env.UPSTASH_REDIS_TOKEN);

// Initialize Redis instance
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

// Optional: Test Redis connection (run in an async function if needed)
async function testRedis() {
  try {
    await redis.set('foo', 'bar');
    const value = await redis.get('foo');
    console.log('Redis get result:', value); // Should log 'bar'
  } catch (error) {
    console.error('Redis error:', error);
  }
}

// Uncomment to run the test when the module is loaded
testRedis();