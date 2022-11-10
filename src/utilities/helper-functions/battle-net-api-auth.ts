import { ClientCredentials, AccessToken } from "simple-oauth2";
import { configurationBattleNetApi } from "../../configuration/configuration-battle-net";
import { Regions } from "./battle-net-api-localization";

let id: string;
let secret: string;
export const initializeCredentials = (clientId: string, clientSecret: string) => {
  if (clientId && clientSecret) throw new Error("Credentials are already initialized!");

  id = clientId;
  secret = clientSecret;
};

export const areCredentialsInitialized = () => {
  if (!id || !secret) return false;

  return true;
};

let accessToken: AccessToken | undefined;
export const getAuthCredentials = async () => {
  if (!areCredentialsInitialized()) throw new Error("Credentials are not initialized!");
  if (accessToken && !accessToken.expired()) return accessToken;

  const options = {
    client: {
      id: id,
      secret: secret,
    },
    auth: {
      tokenHost: configurationBattleNetApi.apiAuthUrl(Regions.Europe)!,
    },
  };
  const client = new ClientCredentials(options);

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
