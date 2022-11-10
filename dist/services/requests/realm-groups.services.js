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
exports.fetchRealmGroupsData = void 0;
const realm_group_services_1 = require("./realm-group.services");
const realm_groups_1 = require("../../classes/realm-groups");
const battle_net_api_1 = require("../battle-net-api");
const battle_net_api_localization_1 = require("../../utilities/helper-functions/battle-net-api-localization");
const fetchRealmGroupsIndexData = (localization) => __awaiter(void 0, void 0, void 0, function* () {
    const requestPath = `/data/wow/connected-realm/index`;
    const responseRaw = yield battle_net_api_1.BattleNetApi.fetchData(requestPath, battle_net_api_localization_1.Namespaces.Dynamic, localization);
    if (!responseRaw)
        return;
    return responseRaw;
});
const fetchRealmGroupsData = (localization) => __awaiter(void 0, void 0, void 0, function* () {
    const realmGroups = [];
    const realmGroupsIndexResponseRaw = yield fetchRealmGroupsIndexData(localization);
    if (!realmGroupsIndexResponseRaw)
        return;
    for (const realmGroupHref of realmGroupsIndexResponseRaw.connected_realms) {
        const realmGroup = yield (0, realm_group_services_1.fetchRealmGroupByUrl)(realmGroupHref.href, localization);
        if (!realmGroup)
            return;
        realmGroups.push(realmGroup);
    }
    return new realm_groups_1.RealmGroups(realmGroups);
});
exports.fetchRealmGroupsData = fetchRealmGroupsData;
