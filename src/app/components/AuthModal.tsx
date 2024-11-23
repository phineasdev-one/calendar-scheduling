import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import { signIn } from "@/lib/auth";
import { GoogleButton } from "./GoogleButton";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogTrigger asChild>
        <Button>Try for free</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="flex flex-row items-center gap-2 justify-center">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h4 className="text-3xl font-semibold">
            Cal<span className="text-primary">Scheduling</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col mt-5">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <GoogleButton text="Sign in with your google" className="w-full" variant="outline" />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
