import { IWowCurrency } from "../utilities/parsers/wow-currency";
import { IAuction } from "../services/requests/interfaces/auction-house-response";
import { AuctionItem } from "./auction-item";
export declare class Auction {
    readonly id: number;
    readonly item: AuctionItem;
    readonly bid: IWowCurrency;
    readonly buyout: IWowCurrency;
    readonly quantity: number;
    readonly timeLeft: string;
    constructor(auctionData: IAuction);
}
//# sourceMappingURL=auction.d.ts.map