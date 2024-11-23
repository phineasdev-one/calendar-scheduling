/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "@/assets/logo.png";
import { DashboardLinks } from "../components/DashboardLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth";
import { requireUser } from "@/hooks/requireUser.hook";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

async function getUserData(userId: string | undefined) {
  if (!userId) {
    return;
  }

  const response = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      username: true,
      grantId: true,
    },
  });
  if (!response?.username) {
    return redirect("/onboarding");
  }

  if (!response.grantId) {
    return redirect("/onboarding/grant-id");
  }

  return response;
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await requireUser();

  await getUserData(session.user?.id);

  return (
    <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" className="size-10" />
              <p className="text-xl font-bold">
                Cal<span className="text-primary">Scheduling</span>
              </p>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 lg:px-4">
              <DashboardLinks />
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="md:hidden shrink-0"
                size="icon"
                variant="outline"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 mt-10">
                <DashboardLinks />
              </nav>
            </SheetContent>
          </Sheet>

          <div className="ml-auto flex items-center gap-x-4">
            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="rounded size-14 object-cover"
                >
                  <img
                    src={session?.user?.image as string}
                    alt="User image"
                    width={60}
                    height={60}
                    className="w-full h-full rounded-full size-14 object-cover"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <form
                    className="w-full"
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button className="w-full text-left">Logout</button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
