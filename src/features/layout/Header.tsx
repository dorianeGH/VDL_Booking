import { Layout } from "@/components/layout";
import Image from "next/image";
import { SignInButton } from "../auth/SignInButton";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = () => {
  //h1 : flex-1 permet de mettre le boutton à droite */

  return (
    <header className='w-full border-b py-1'>
      <Layout className='flex flex-row items-center gap-4 py-0'>
        <div className='flex-1'>
          <Image src='/icon.png' width={32} height={32} alt='vanderloc logo' />
        </div>
        <div className='flex items-center gap-2'>
          <ModeToggle />
          <SignInButton />
        </div>
      </Layout>
    </header>
  );
};
