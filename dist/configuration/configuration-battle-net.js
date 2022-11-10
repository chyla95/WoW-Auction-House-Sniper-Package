"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationBattleNetApi = void 0;
const battle_net_api_localization_1 = require("../utilities/helper-functions/battle-net-api-localization");
exports.configurationBattleNetApi = {
    apiAuthUrl: (region) => {
        return `https://${(0, battle_net_api_localization_1.getRegionString)(region)}.battle.net`;
    },
    apiDomain: (region) => {
        return `https://${(0, battle_net_api_localization_1.getRegionString)(region)}.api.blizzard.com`;
    },
    clientId: "",
    clientSecret: "",
};
