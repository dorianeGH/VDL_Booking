"use client";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <form>
      <Button
        variant='secondary'
        size='sm'
        /* formAction={async () => {
          "use server";
          await signIn();
        }} */
        onClick={() => {
          console.log("signin");
        }}
      >
        <LogIn size={16} className='mr-2' />
        Sign In
      </Button>
    </form>
  );
};
