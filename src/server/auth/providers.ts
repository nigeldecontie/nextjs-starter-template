import { Discord } from 'arctic';

export const discord = new Discord(
  process.env.DISCORD_CLIENT_ID!,
  process.env.DISCORD_CLIENT_SECRET!,
  'http://localhost:3000/api/auth/discord/callback',
);
