import { getRegionString, Regions } from "../utilities/helper-functions/battle-net-api-localization";

export const configurationBattleNetApi = {
  apiAuthUrl: (region: Regions) => {
    return `https://${getRegionString(region)}.battle.net`;
  },
  apiDomain: (region: Regions) => {
    return `https://${getRegionString(region)}.api.blizzard.com`;
  },
  clientId: "",
  clientSecret: "",
};
