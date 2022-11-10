import { fetchAuctionHouseByUrl } from "../services/requests/auction-house.services";
import { fetchRealmGroupById, fetchRealmGroupByUrl } from "../services/requests/realm-group.services";
import { IRealmGroupResponse } from "../services/requests/interfaces/realm-group-response";
import { Realm } from "./realm";
import { IRequestLocalization } from "../services/battle-net-api";

export class RealmGroup {
  readonly id: number;
  readonly hasQueue: boolean;
  readonly status: string;
  readonly population: string;
  readonly realms: Realm[] = [];
  private readonly urls: {
    auctionHouse: string;
    mythicLeaderboards: string;
  };

  constructor(realmGroupData: IRealmGroupResponse) {
    this.id = realmGroupData.id;
    this.hasQueue = realmGroupData.has_queue;
    this.status = realmGroupData.status.name;
    this.population = realmGroupData.population.name;
    for (const realm of realmGroupData.realms) {
      this.realms.push(new Realm(realm));
    }
    this.urls = {
      auctionHouse: realmGroupData.auctions.href,
      mythicLeaderboards: realmGroupData.mythic_leaderboards.href,
    };
  }

  static async fetchById(id: number, localization: IRequestLocalization) {
    return await fetchRealmGroupById(id, localization);
  }

  static async fetchByUrl(url: string, localization: IRequestLocalization) {
    return await fetchRealmGroupByUrl(url, localization);
  }

  async fetchAuctionHouse(localization: IRequestLocalization) {
    return await fetchAuctionHouseByUrl(this.urls.auctionHouse, localization);
  }

  getLabel() {
    let label = "";
    let iteration = 0;
    for (const realm of this.realms) {
      iteration++;
      label += realm.name;
      if (iteration < this.realms.length) label += ", ";
    }
    return label;
  }
}
