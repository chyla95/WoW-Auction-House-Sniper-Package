import { IRequestLocalization } from "../services/battle-net-api";
import { Auction } from "./auction";
import { Item } from "./item";
import { RealmGroup } from "./realm-group";
export declare class AuctionHouseScanner {
    private realmGroupsToScan;
    private itemsToFind;
    private readonly localization;
    private isScanInProgress;
    constructor(realmGroupsToScan: RealmGroup[], itemsToFind: Item[], localization: IRequestLocalization);
    addRealmGroup(realmGroupToScan: RealmGroup): void;
    removeRealmGroup(realmGroupToScan: RealmGroup): void;
    addItem(itemToFind: Item): void;
    removeItem(itemToFind: Item): void;
    scan(callback: (matchingAuctions: Auction[], realmGroup: RealmGroup) => Promise<void>): Promise<void>;
}
//# sourceMappingURL=auction-house-scanner.d.ts.map