import { Auction } from "./auction";
import { IAuctionHouseResponse } from "../services/requests/interfaces/auction-house-response";
export declare class AuctionHouse {
    readonly auctions: Auction[];
    private readonly urls;
    constructor(auctionHouseData: IAuctionHouseResponse);
    filterAuctions(predicate: (auction: Auction) => boolean): Auction[];
}
//# sourceMappingURL=auction-house.d.ts.map