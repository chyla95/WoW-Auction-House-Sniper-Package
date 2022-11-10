import { Realm } from "../../classes/realm";
import { IRequestLocalization } from "../battle-net-api";
export declare const fetchRealmById: (id: number, localization: IRequestLocalization) => Promise<Realm | undefined>;
export declare const fetchRealmByName: (name: string, localization: IRequestLocalization) => Promise<Realm | undefined>;
export declare const fetchRealmByUrl: (url: string, localization: IRequestLocalization) => Promise<Realm | undefined>;
//# sourceMappingURL=realm.services.d.ts.map