import { IRequestLocalization } from "../services/battle-net-api";
import { fetchRealmGroupsData } from "../services/requests/realm-groups.services";
import { parseSlug } from "../utilities/parsers/wow-realm-slug";
import { RealmGroup } from "./realm-group";

export class RealmGroups {
  readonly realmGroups: RealmGroup[];

  constructor(realmGroups: RealmGroup[]) {
    this.realmGroups = realmGroups;
  }

  static async fetchAll(localization: IRequestLocalization) {
    return await fetchRealmGroupsData(localization);
  }

  findRealmGroupById(id: number) {
    return this.realmGroups.find((realmGroup) => {
      return realmGroup.id == id;
    });
  }

  findRealmGroupByRealmName(name: string) {
    return this.realmGroups.find((realmGroup) => {
      const doesIncludeDesiredRealm = realmGroup.realms.find((realm) => {
        return parseSlug(realm.name) == parseSlug(name);
      });
      return doesIncludeDesiredRealm;
    });
  }
}
