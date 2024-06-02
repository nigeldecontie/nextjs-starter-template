import { Discord } from 'arctic';

console.log(process.env.DISCORD_CLIENT_ID);
console.log(process.env.DISCORD_CLIENT_SECRET);

export const discord = new Discord(
  process.env.DISCORD_CLIENT_ID!,
  process.env.DISCORD_CLIENT_SECRET!,
  'http://localhost:3000/api/auth/discord/callback',
);
