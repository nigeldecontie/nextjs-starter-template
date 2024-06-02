import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const dbGlobalConnection = globalThis as unknown as {
  queryClient: postgres.Sql | undefined;
};

const queryClient = dbGlobalConnection.queryClient ?? postgres(String(process.env.DATABASE_URL));
if (process.env.NODE_ENV !== 'production') dbGlobalConnection.queryClient = queryClient;

export const db = drizzle(queryClient, { schema });
