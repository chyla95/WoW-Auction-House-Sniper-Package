declare const ahSniper: {
    connect: (bnClientId: string, bnClientSecret: string) => Promise<import("simple-oauth2").AccessToken>;
};
export default ahSniper;
export * from "./utilities/helper-functions/battle-net-api-localization";
export * from "./classes/auction-house-scanner";
export * from "./classes/realm-groups";
export * from "./classes/realm-group";
export * from "./classes/realm";
export * from "./classes/item";
//# sourceMappingURL=app.d.ts.map