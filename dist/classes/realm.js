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
exports.Realm = void 0;
const realm_services_1 = require("../services/requests/realm.services");
const realm_group_1 = require("./realm-group");
class Realm {
    constructor(realmData) {
        this.id = realmData.id;
        this.name = realmData.name;
        this.type = realmData.type.name;
        this.timezone = realmData.timezone;
        this.region = realmData.region.name;
        this.urls = {
            realmGroup: realmData.connected_realm.href,
        };
    }
    static fetchById(id, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, realm_services_1.fetchRealmById)(id, localization);
        });
    }
    static fetchByName(name, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, realm_services_1.fetchRealmByName)(name, localization);
        });
    }
    static fetchByUrl(url, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, realm_services_1.fetchRealmByUrl)(url, localization);
        });
    }
    fetchRealmGroup(localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield realm_group_1.RealmGroup.fetchByUrl(this.urls.realmGroup, localization);
        });
    }
}
exports.Realm = Realm;
