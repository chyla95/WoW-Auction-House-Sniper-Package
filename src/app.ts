import { BattleNetApi } from "./services/battle-net-api";

const ahSniper = {
  connect: async (bnClientId: string, bnClientSecret: string) => {
    const connection = await BattleNetApi.connect(bnClientId, bnClientSecret);
    if (!connection) throw new Error("Could not connect to the API!");

    return connection;
  },
};
export default ahSniper;

export * from "./utilities/helper-functions/battle-net-api-localization";
export * from "./classes/auction-house-scanner";
export * from "./classes/realm-groups";
export * from "./classes/realm-group";
export * from "./classes/realm";
export * from "./classes/item";
