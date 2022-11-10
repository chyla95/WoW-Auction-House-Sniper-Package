import { Locales, Namespaces, Regions } from "../utilities/helper-functions/battle-net-api-localization";
import { getAuthCredentials } from "../utilities/helper-functions/battle-net-api-auth";
import { fetchRawData } from "../utilities/helper-functions/battle-net-api-request";

export interface IRequestLocalization {
  region: Regions;
  locale: Locales;
}

export class BattleNetApi {
  static async getAuthCredentials() {
    const credentials = await getAuthCredentials();
    return credentials;
  }
  static async getAuthToken() {
    const credentials = await this.getAuthCredentials();
    if (!credentials) return;

    const token = credentials.token.access_token;
    return token;
  }

  static async fetchData(requestPathOrUrl: string, namespace: Namespaces, localization: IRequestLocalization) {
    const authToken = await this.getAuthToken();
    return await fetchRawData(requestPathOrUrl, namespace, authToken, localization);
  }
}
