import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  discord_id: text('discord_id').notNull().unique(),
  username: text('username').notNull(),
});

export type User = typeof users.$inferSelect;
export type CreateUser = typeof users.$inferSelect;

export const sessions = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
});

export type Session = typeof sessions.$inferSelect;
export type CreateSession = typeof sessions.$inferSelect;
