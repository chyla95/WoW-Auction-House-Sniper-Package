import { Locales, Namespaces, Regions } from "../utilities/helper-functions/battle-net-api-localization";
export interface IRequestLocalization {
    region: Regions;
    locale: Locales;
}
export declare class BattleNetApi {
    static connect(clientId: string, clientSecret: string): Promise<import("simple-oauth2").AccessToken | undefined>;
    static getAuthCredentials(): Promise<import("simple-oauth2").AccessToken | undefined>;
    static getAuthToken(): Promise<any>;
    static fetchData(requestPathOrUrl: string, namespace: Namespaces, localization: IRequestLocalization): Promise<any>;
}
//# sourceMappingURL=battle-net-api.d.ts.map