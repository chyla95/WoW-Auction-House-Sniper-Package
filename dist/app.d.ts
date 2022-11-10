declare const ahSniper: {
    connect: (bnClientId: string, bnClientSecret: string) => Promise<import("simple-oauth2").AccessToken | undefined>;
};
export default ahSniper;
export * from "./classes/item";
export * from "./classes/realm";
export * from "./classes/realm-group";
export * from "./utilities/helper-functions/battle-net-api-localization";
export * from "./classes/auction-house-scanner";
//# sourceMappingURL=app.d.ts.map