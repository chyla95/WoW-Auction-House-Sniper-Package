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
exports.BattleNetApi = void 0;
const battle_net_api_auth_1 = require("../utilities/helper-functions/battle-net-api-auth");
const battle_net_api_request_1 = require("../utilities/helper-functions/battle-net-api-request");
class BattleNetApi {
    static connect(clientId, clientSecret) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, battle_net_api_auth_1.initializeCredentials)(clientId, clientSecret);
            const credentials = yield this.getAuthCredentials();
            return credentials;
        });
    }
    static getAuthCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            const credentials = yield (0, battle_net_api_auth_1.getAuthCredentials)();
            return credentials;
        });
    }
    static getAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const credentials = yield this.getAuthCredentials();
            if (!credentials)
                return;
            const token = credentials.token.access_token;
            return token;
        });
    }
    static fetchData(requestPathOrUrl, namespace, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            const authToken = yield this.getAuthToken();
            return yield (0, battle_net_api_request_1.fetchRawData)(requestPathOrUrl, namespace, authToken, localization);
        });
    }
}
exports.BattleNetApi = BattleNetApi;
