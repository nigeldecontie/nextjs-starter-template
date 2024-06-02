import { Button, Link } from '@nextui-org/react';
import DiscordIcon from './discord-icon';

export default async function Page() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex max-w-96 flex-col py-24">
        <p className="mb-5 text-center">Only real gamers allowed.</p>
        <Button
          href="/api/auth/discord"
          as={Link}
          size="lg"
          color="default"
          className="bg-[#5865F2]"
          endContent={<DiscordIcon />}
        >
          Continue with Discord
        </Button>
      </div>
    </div>
  );
}
