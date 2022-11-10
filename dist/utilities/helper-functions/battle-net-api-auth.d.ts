import { AccessToken } from "simple-oauth2";
export declare const initializeCredentials: (clientId: string, clientSecret: string) => void;
export declare const areCredentialsInitialized: () => boolean;
export declare const getAuthCredentials: () => Promise<AccessToken | undefined>;
export declare const getAuthToken: () => Promise<string | undefined>;
//# sourceMappingURL=battle-net-api-auth.d.ts.map