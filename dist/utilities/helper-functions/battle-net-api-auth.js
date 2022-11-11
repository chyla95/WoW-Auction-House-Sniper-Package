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
exports.getAuthToken = exports.getAuthCredentials = exports.areCredentialsInitialized = exports.initializeCredentials = void 0;
const simple_oauth2_1 = require("simple-oauth2");
const configuration_battle_net_1 = require("../../configuration/configuration-battle-net");
const battle_net_api_localization_1 = require("./battle-net-api-localization");
let initializedClientId;
let initializedClientSecret;
const initializeCredentials = (clientId, clientSecret) => {
    if (initializedClientId && initializedClientSecret)
        throw new Error("Credentials cannot be re-initialized!");
    initializedClientId = clientId;
    initializedClientSecret = clientSecret;
};
exports.initializeCredentials = initializeCredentials;
const areCredentialsInitialized = () => {
    if (!initializedClientId || !initializedClientSecret)
        return false;
    return true;
};
exports.areCredentialsInitialized = areCredentialsInitialized;
let accessToken;
const getAuthCredentials = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, exports.areCredentialsInitialized)())
        throw new Error("Missing credentials!");
    if (accessToken && !accessToken.expired())
        return accessToken;
    const options = {
        client: {
            id: initializedClientId,
            secret: initializedClientSecret,
        },
        auth: {
            tokenHost: configuration_battle_net_1.configurationBattleNetApi.apiAuthUrl(battle_net_api_localization_1.Regions.Europe),
        },
    };
    const client = new simple_oauth2_1.ClientCredentials(options);
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
