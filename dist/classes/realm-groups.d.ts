import { IRequestLocalization } from "../services/battle-net-api";
import { RealmGroup } from "./realm-group";
export declare class RealmGroups {
    readonly realmGroups: RealmGroup[];
    constructor(realmGroups: RealmGroup[]);
    static fetchAll(localization: IRequestLocalization): Promise<RealmGroups | undefined>;
    findRealmGroupById(id: number): RealmGroup | undefined;
    findRealmGroupByRealmName(name: string): RealmGroup | undefined;
}
//# sourceMappingURL=realm-groups.d.ts.map