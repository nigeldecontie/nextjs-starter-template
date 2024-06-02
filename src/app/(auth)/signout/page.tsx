import { logout } from '@/server/auth';
import { Button, Link } from '@nextui-org/react';

export default async function Page() {
  return (
    <form action={logout}>
      <div className="flex w-full items-center justify-center">
        <div className="flex max-w-96 flex-col py-24">
          <Button type="submit" size="lg" color="default" className="bg-[#5865F2]">
            Logout
          </Button>
        </div>
      </div>
    </form>
  );
}
