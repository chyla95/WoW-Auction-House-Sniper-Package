import { Auction } from "./auction";
import { IAuctionHouseResponse } from "../services/requests/interfaces/auction-house-response";

export class AuctionHouse {
  readonly auctions: Auction[] = [];
  private readonly urls: {
    commodities: string;
    realmGroup: string;
  };

  constructor(auctionHouseData: IAuctionHouseResponse) {
    for (const auction of auctionHouseData.auctions) {
      this.auctions.push(new Auction(auction));
    }
    this.urls = {
      commodities: auctionHouseData.commodities.href,
      realmGroup: auctionHouseData.connected_realm.href,
    };
  }

  filterAuctions(predicate: (auction: Auction) => boolean) {
    const matchingAuctions = this.auctions.filter((auction) => {
      if (predicate(auction)) return true;
    });
    return matchingAuctions;
  }
}
