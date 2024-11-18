import { requireUser } from "@/hooks/requireUser.hook";
import prisma from "@/lib/db";
import { nylas, nylasConfig } from "@/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await requireUser();

  const url = new URL(req.url);

  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json("No authorization code returned from your site", {
      status: 400,
    });
  }

  try {
    const response = await nylas.auth.exchangeCodeForToken({
      clientSecret: nylasConfig.apiKey,
      clientId: nylasConfig.clientId,
      redirectUri: nylasConfig.redirectUri,
      code,
    });

    const { grantId, email } = response;

    await prisma.user?.update({
      where: {
        id: session.user?.id,
      },
      data: {
        grantEmail: email,
        grantId,
      },
    });
  } catch (error) {
    console.log("Error something went wrong", error);
  }

  redirect("/dashboard");
}
