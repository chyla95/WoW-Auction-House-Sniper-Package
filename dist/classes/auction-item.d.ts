import { IRequestLocalization } from "../services/battle-net-api";
import { IAuctionItem } from "../services/requests/interfaces/auction-house-response";
export declare class AuctionItem {
    readonly id: number;
    constructor(auctionItemData: IAuctionItem);
    fetchDetails(localization: IRequestLocalization): Promise<import("./item").Item | undefined>;
}
//# sourceMappingURL=auction-item.d.ts.map