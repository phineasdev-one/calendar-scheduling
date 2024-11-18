import Nylas from "nylas";

export const nylas = new Nylas({
  apiKey: process.env.NYLAS_API_SECRET_KEY as string,
  apiUri: process.env.NYLAS_API_URL as string,
});

export const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID!,
  redirectUri: process.env.NEXT_PUBLIC_URL + "/api/oauth/exchange",
  apiKey: process.env.NYLAS_API_SECRET_KEY!,
  apiUri: process.env.NYLAS_API_URL!,
};
