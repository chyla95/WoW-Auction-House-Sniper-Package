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
exports.RealmGroup = void 0;
const auction_house_services_1 = require("../services/requests/auction-house.services");
const realm_group_services_1 = require("../services/requests/realm-group.services");
const realm_1 = require("./realm");
class RealmGroup {
    constructor(realmGroupData) {
        this.realms = [];
        this.id = realmGroupData.id;
        this.hasQueue = realmGroupData.has_queue;
        this.status = realmGroupData.status.name;
        this.population = realmGroupData.population.name;
        for (const realm of realmGroupData.realms) {
            this.realms.push(new realm_1.Realm(realm));
        }
        this.urls = {
            auctionHouse: realmGroupData.auctions.href,
            mythicLeaderboards: realmGroupData.mythic_leaderboards.href,
        };
    }
    static fetchById(id, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, realm_group_services_1.fetchRealmGroupById)(id, localization);
        });
    }
    static fetchByUrl(url, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, realm_group_services_1.fetchRealmGroupByUrl)(url, localization);
        });
    }
    fetchAuctionHouse(localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, auction_house_services_1.fetchAuctionHouseByUrl)(this.urls.auctionHouse, localization);
        });
    }
    getLabel() {
        let label = "";
        let iteration = 0;
        for (const realm of this.realms) {
            iteration++;
            label += realm.name;
            if (iteration < this.realms.length)
                label += ", ";
        }
        return label;
    }
}
exports.RealmGroup = RealmGroup;
