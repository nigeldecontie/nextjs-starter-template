'use server';

import { cookies } from 'next/headers';
import { lucia, validateRequest } from '.';
import { redirect } from 'next/navigation';

type ActionResult = {
  error: string | null;
};

export async function logout(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect('/');
}
