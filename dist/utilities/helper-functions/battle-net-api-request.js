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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRawData = void 0;
const axios_1 = __importDefault(require("axios"));
const configuration_battle_net_1 = require("../../configuration/configuration-battle-net");
const battle_net_api_localization_1 = require("./battle-net-api-localization");
const is_url_1 = require("../validators/is-url");
const fetchRawData = (requestPathOrUrl, namespace, authToken, localization) => __awaiter(void 0, void 0, void 0, function* () {
    let requestUrl;
    if ((0, is_url_1.isUrl)(requestPathOrUrl)) {
        requestUrl = requestPathOrUrl;
    }
    else {
        const requestDomain = configuration_battle_net_1.configurationBattleNetApi.apiDomain(localization.region);
        const requestPath = requestPathOrUrl;
        requestUrl = requestDomain + requestPath;
    }
    const localeParam = (0, battle_net_api_localization_1.getLocaleString)(localization.locale);
    const namespaceParam = (0, battle_net_api_localization_1.getNamespaceString)(namespace, localization.region);
    let responseRaw;
    try {
        responseRaw = yield axios_1.default.get(requestUrl, {
            params: {
                locale: localeParam,
                namespace: namespaceParam,
            },
            headers: {
                authorization: `Bearer ${authToken}`,
            },
        });
    }
    catch (error) {
        console.error(error);
    }
    if (!responseRaw)
        return;
    return responseRaw.data;
});
exports.fetchRawData = fetchRawData;
