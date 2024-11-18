import { SettingsForm } from "@/app/components/SettingsForm";
import { requireUser } from "@/hooks/requireUser.hook";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id?: string) {
  if (!id) {
    return;
  }

  const data = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      email: true,
      image: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

const SettingsRoutePage = async () => {
  const session = await requireUser();

  const data = await getData(session.user?.id);

  return (
    <SettingsForm
      fullName={data?.name as string}
      email={data?.email}
      profileImage={data?.image as string}
    />
  );
};

export default SettingsRoutePage;
