import { IRealmGroupResponse } from "../services/requests/interfaces/realm-group-response";
import { Realm } from "./realm";
import { IRequestLocalization } from "../services/battle-net-api";
export declare class RealmGroup {
    readonly id: number;
    readonly hasQueue: boolean;
    readonly status: string;
    readonly population: string;
    readonly realms: Realm[];
    private readonly urls;
    constructor(realmGroupData: IRealmGroupResponse);
    static fetchById(id: number, localization: IRequestLocalization): Promise<RealmGroup | undefined>;
    static fetchByUrl(url: string, localization: IRequestLocalization): Promise<RealmGroup | undefined>;
    fetchAuctionHouse(localization: IRequestLocalization): Promise<import("./auction-house").AuctionHouse | undefined>;
    getLabel(): string;
}
//# sourceMappingURL=realm-group.d.ts.map