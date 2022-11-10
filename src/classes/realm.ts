import { fetchRealmById, fetchRealmByName, fetchRealmByUrl } from "../services/requests/realm.services";
import { IRealmResponse } from "../services/requests/interfaces/realm-response";
import { RealmGroup } from "./realm-group";
import { IRequestLocalization } from "../services/battle-net-api";

export class Realm {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly timezone: string;
  readonly region: string;
  private readonly urls: {
    realmGroup: string;
  };

  constructor(realmData: IRealmResponse) {
    this.id = realmData.id;
    this.name = realmData.name;
    this.type = realmData.type.name;
    this.timezone = realmData.timezone;
    this.region = realmData.region.name;
    this.urls = {
      realmGroup: realmData.connected_realm.href,
    };
  }

  static async fetchById(id: number, localization: IRequestLocalization) {
    return await fetchRealmById(id, localization);
  }

  static async fetchByName(name: string, localization: IRequestLocalization) {
    return await fetchRealmByName(name, localization);
  }

  static async fetchByUrl(url: string, localization: IRequestLocalization) {
    return await fetchRealmByUrl(url, localization);
  }

  async fetchRealmGroup(localization: IRequestLocalization) {
    return await RealmGroup.fetchByUrl(this.urls.realmGroup, localization);
  }
}
