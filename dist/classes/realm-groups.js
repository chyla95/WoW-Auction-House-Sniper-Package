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
exports.RealmGroups = void 0;
const realm_groups_services_1 = require("../services/requests/realm-groups.services");
const wow_realm_slug_1 = require("../utilities/parsers/wow-realm-slug");
class RealmGroups {
    constructor(realmGroups) {
        this.realmGroups = realmGroups;
    }
    static fetchAll(localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, realm_groups_services_1.fetchRealmGroupsData)(localization);
        });
    }
    findRealmGroupById(id) {
        return this.realmGroups.find((realmGroup) => {
            return realmGroup.id == id;
        });
    }
    findRealmGroupByRealmName(name) {
        return this.realmGroups.find((realmGroup) => {
            const doesIncludeDesiredRealm = realmGroup.realms.find((realm) => {
                return (0, wow_realm_slug_1.parseSlug)(realm.name) == (0, wow_realm_slug_1.parseSlug)(name);
            });
            return doesIncludeDesiredRealm;
        });
    }
}
exports.RealmGroups = RealmGroups;
