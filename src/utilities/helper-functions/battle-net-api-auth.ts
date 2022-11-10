import { ClientCredentials, AccessToken } from "simple-oauth2";
import { configurationBattleNetApi } from "../../configuration/configuration-battle-net";
import { Regions } from "./battle-net-api-localization";

let initializedClientId: string;
let initializedClientSecret: string;
export const initializeCredentials = (clientId: string, clientSecret: string) => {
  if (initializedClientId && initializedClientSecret) throw new Error("Credentials are already initialized!");

  initializedClientId = clientId;
  initializedClientSecret = clientSecret;
};

export const areCredentialsInitialized = () => {
  if (!initializedClientId || !initializedClientSecret) return false;

  return true;
};

let accessToken: AccessToken | undefined;
export const getAuthCredentials = async () => {
  if (!areCredentialsInitialized()) throw new Error("Credentials are not initialized!");
  if (accessToken && !accessToken.expired()) return accessToken;

  const options = {
    client: {
      id: initializedClientId,
      secret: initializedClientSecret,
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
