"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auction = void 0;
const wow_currency_1 = require("../utilities/parsers/wow-currency");
const auction_item_1 = require("./auction-item");
class Auction {
    constructor(auctionData) {
        this.id = auctionData.id;
        this.item = new auction_item_1.AuctionItem(auctionData.item);
        this.bid = (0, wow_currency_1.convertToWowCurrency)(auctionData.bid);
        this.buyout = (0, wow_currency_1.convertToWowCurrency)(auctionData.buyout);
        this.quantity = auctionData.quantity;
        this.timeLeft = auctionData.time_left;
    }
}
exports.Auction = Auction;
