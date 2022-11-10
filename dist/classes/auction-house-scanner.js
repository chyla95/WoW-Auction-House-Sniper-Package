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
exports.AuctionHouseScanner = void 0;
class AuctionHouseScanner {
    constructor(realmGroupsToScan, itemsToFind, localization) {
        this.isScanInProgress = false;
        this.realmGroupsToScan = realmGroupsToScan;
        this.itemsToFind = itemsToFind;
        this.localization = localization;
    }
    addRealmGroup(realmGroupToScan) {
        this.realmGroupsToScan.push(realmGroupToScan);
    }
    removeRealmGroup(realmGroupToScan) {
        this.realmGroupsToScan = this.realmGroupsToScan.filter((rg) => {
            return rg.id != realmGroupToScan.id;
        });
    }
    addItem(itemToFind) {
        this.itemsToFind.push(itemToFind);
    }
    removeItem(itemToFind) {
        this.itemsToFind = this.itemsToFind.filter((i) => {
            return i.id != itemToFind.id;
        });
    }
    scan(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isScanInProgress)
                return console.error("Cannot run more than one scan, from the same scanner, at once!");
            this.isScanInProgress = true;
            // For given realms
            for (const realmGroupToScan of this.realmGroupsToScan) {
                const auctionHouse = yield realmGroupToScan.fetchAuctionHouse(this.localization);
                if (!auctionHouse)
                    return console.error("Could not fetch the auction house!");
                let matchingAuctions = [];
                // For given items
                for (const itemToFind of this.itemsToFind) {
                    const matchingAuctionsForTheGivenItemToFind = auctionHouse.filterAuctions((auction) => {
                        return auction.item.id == itemToFind.id;
                    });
                    matchingAuctions = [...matchingAuctions, ...matchingAuctionsForTheGivenItemToFind];
                }
                yield callback(matchingAuctions, realmGroupToScan);
            }
            this.isScanInProgress = false;
        });
    }
}
exports.AuctionHouseScanner = AuctionHouseScanner;
