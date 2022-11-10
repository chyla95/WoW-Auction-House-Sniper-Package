"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionHouse = void 0;
const auction_1 = require("./auction");
class AuctionHouse {
    constructor(auctionHouseData) {
        this.auctions = [];
        for (const auction of auctionHouseData.auctions) {
            this.auctions.push(new auction_1.Auction(auction));
        }
        this.urls = {
            commodities: auctionHouseData.commodities.href,
            realmGroup: auctionHouseData.connected_realm.href,
        };
    }
    filterAuctions(predicate) {
        const matchingAuctions = this.auctions.filter((auction) => {
            if (predicate(auction))
                return true;
        });
        return matchingAuctions;
    }
}
exports.AuctionHouse = AuctionHouse;
