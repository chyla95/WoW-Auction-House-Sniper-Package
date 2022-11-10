import { IRealmResponse } from "../services/requests/interfaces/realm-response";
import { RealmGroup } from "./realm-group";
import { IRequestLocalization } from "../services/battle-net-api";
export declare class Realm {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly timezone: string;
    readonly region: string;
    private readonly urls;
    constructor(realmData: IRealmResponse);
    static fetchById(id: number, localization: IRequestLocalization): Promise<Realm | undefined>;
    static fetchByName(name: string, localization: IRequestLocalization): Promise<Realm | undefined>;
    static fetchByUrl(url: string, localization: IRequestLocalization): Promise<Realm | undefined>;
    fetchRealmGroup(localization: IRequestLocalization): Promise<RealmGroup | undefined>;
}
//# sourceMappingURL=realm.d.ts.map