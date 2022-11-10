"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthToken = exports.getAuthCredentials = void 0;
const simple_oauth2_1 = require("simple-oauth2");
const configuration_battle_net_1 = require("../../configuration/configuration-battle-net");
const battle_net_api_localization_1 = require("./battle-net-api-localization");
const options = {
    client: {
        id: configuration_battle_net_1.configurationBattleNetApi.clientId,
        secret: configuration_battle_net_1.configurationBattleNetApi.clientSecret,
    },
    auth: {
        tokenHost: configuration_battle_net_1.configurationBattleNetApi.apiAuthUrl(battle_net_api_localization_1.Regions.Europe),
    },
};
const client = new simple_oauth2_1.ClientCredentials(options);
let accessToken;
const getAuthCredentials = () => __awaiter(void 0, void 0, void 0, function* () {
    if (accessToken && !accessToken.expired())
        return accessToken;
    try {
        accessToken = yield client.getToken(options);
    }
    catch (error) {
        console.error(error);
    }
    return accessToken;
});
exports.getAuthCredentials = getAuthCredentials;
const getAuthToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = yield (0, exports.getAuthCredentials)();
    if (!credentials)
        return;
    const token = credentials.token.access_token;
    return token;
});
exports.getAuthToken = getAuthToken;