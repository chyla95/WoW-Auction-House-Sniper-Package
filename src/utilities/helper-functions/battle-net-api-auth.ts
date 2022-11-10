import { ClientCredentials, AccessToken } from "simple-oauth2";
import { configurationBattleNetApi } from "../../configuration/configuration-battle-net";
import { Regions } from "./battle-net-api-localization";

const options = {
  client: {
    id: configurationBattleNetApi.clientId!,
    secret: configurationBattleNetApi.clientSecret!,
  },
  auth: {
    tokenHost: configurationBattleNetApi.apiAuthUrl(Regions.Europe)!,
  },
};

const client = new ClientCredentials(options);

let accessToken: AccessToken | undefined;
export const getAuthCredentials = async () => {
  if (accessToken && !accessToken.expired()) return accessToken;

  try {
    accessToken = await client.getToken(options);
  } catch (error) {
    console.error(error);
  }
  return accessToken;
};

export const getAuthToken = async () => {
  const credentials = await getAuthCredentials();
  if (!credentials) return;

  const token = credentials.token.access_token as string;
  return token;
};
