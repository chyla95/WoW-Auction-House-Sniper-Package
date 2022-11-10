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
exports.fetchRealmGroupByUrl = exports.fetchRealmGroupById = void 0;
const realm_group_1 = require("../../classes/realm-group");
const battle_net_api_localization_1 = require("../../utilities/helper-functions/battle-net-api-localization");
const battle_net_api_1 = require("../battle-net-api");
const fetchRealmGroupById = (id, localization) => __awaiter(void 0, void 0, void 0, function* () {
    const requestPath = `/data/wow/connected-realm/${id}`;
    const responseRaw = yield battle_net_api_1.BattleNetApi.fetchData(requestPath, battle_net_api_localization_1.Namespaces.Dynamic, localization);
    if (!responseRaw)
        return;
    return new realm_group_1.RealmGroup(responseRaw);
});
exports.fetchRealmGroupById = fetchRealmGroupById;
const fetchRealmGroupByUrl = (url, localization) => __awaiter(void 0, void 0, void 0, function* () {
    const responseRaw = yield battle_net_api_1.BattleNetApi.fetchData(url, battle_net_api_localization_1.Namespaces.Dynamic, localization);
    if (!responseRaw)
        return;
    return new realm_group_1.RealmGroup(responseRaw);
});
exports.fetchRealmGroupByUrl = fetchRealmGroupByUrl;
