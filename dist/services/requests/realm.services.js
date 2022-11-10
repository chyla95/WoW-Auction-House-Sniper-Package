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
exports.fetchRealmByUrl = exports.fetchRealmByName = exports.fetchRealmById = void 0;
const realm_1 = require("../../classes/realm");
const battle_net_api_localization_1 = require("../../utilities/helper-functions/battle-net-api-localization");
const wow_realm_slug_1 = require("../../utilities/parsers/wow-realm-slug");
const battle_net_api_1 = require("../battle-net-api");
const fetchRealmById = (id, localization) => __awaiter(void 0, void 0, void 0, function* () {
    const requestPath = `/data/wow/realm/${id}`;
    const responseRaw = yield battle_net_api_1.BattleNetApi.fetchData(requestPath, battle_net_api_localization_1.Namespaces.Dynamic, localization);
    if (!responseRaw)
        return;
    return new realm_1.Realm(responseRaw);
});
exports.fetchRealmById = fetchRealmById;
const fetchRealmByName = (name, localization) => __awaiter(void 0, void 0, void 0, function* () {
    const requestPath = `/data/wow/realm/${(0, wow_realm_slug_1.parseSlug)(name)}`;
    const responseRaw = yield battle_net_api_1.BattleNetApi.fetchData(requestPath, battle_net_api_localization_1.Namespaces.Dynamic, localization);
    if (!responseRaw)
        return;
    return new realm_1.Realm(responseRaw);
});
exports.fetchRealmByName = fetchRealmByName;
const fetchRealmByUrl = (url, localization) => __awaiter(void 0, void 0, void 0, function* () {
    const responseRaw = yield battle_net_api_1.BattleNetApi.fetchData(url, battle_net_api_localization_1.Namespaces.Dynamic, localization);
    if (!responseRaw)
        return;
    return new realm_1.Realm(responseRaw);
});
exports.fetchRealmByUrl = fetchRealmByUrl;
