import { IRequestLocalization } from "../services/battle-net-api";
import { Auction } from "./auction";
import { Item } from "./item";
import { RealmGroup } from "./realm-group";

export class AuctionHouseScanner {
  private realmGroupsToScan: RealmGroup[];
  private itemsToFind: Item[];
  private readonly localization: IRequestLocalization;
  private isScanInProgress = false;

  constructor(realmGroupsToScan: RealmGroup[], itemsToFind: Item[], localization: IRequestLocalization) {
    this.realmGroupsToScan = realmGroupsToScan;
    this.itemsToFind = itemsToFind;
    this.localization = localization;
  }

  addRealmGroup(realmGroupToScan: RealmGroup) {
    this.realmGroupsToScan.push(realmGroupToScan);
  }

  removeRealmGroup(realmGroupToScan: RealmGroup) {
    this.realmGroupsToScan = this.realmGroupsToScan.filter((rg) => {
      return rg.id != realmGroupToScan.id;
    });
  }

  addItem(itemToFind: Item) {
    this.itemsToFind.push(itemToFind);
  }

  removeItem(itemToFind: Item) {
    this.itemsToFind = this.itemsToFind.filter((i) => {
      return i.id != itemToFind.id;
    });
  }

  async scan(callback: (matchingAuctions: Auction[], realmGroup: RealmGroup) => Promise<void>) {
    if (this.isScanInProgress) return console.error("Cannot run more than one scan, from the same scanner, at once!");
    this.isScanInProgress = true;
    // For given realms
    for (const realmGroupToScan of this.realmGroupsToScan) {
      const auctionHouse = await realmGroupToScan.fetchAuctionHouse(this.localization);
      if (!auctionHouse) return console.error("Could not fetch the auction house!");

      let matchingAuctions: Auction[] = [];
      // For given items
      for (const itemToFind of this.itemsToFind) {
        const matchingAuctionsForTheGivenItemToFind = auctionHouse.filterAuctions((auction) => {
          return auction.item.id == itemToFind.id;
        });
        matchingAuctions = [...matchingAuctions, ...matchingAuctionsForTheGivenItemToFind];
      }

      await callback(matchingAuctions, realmGroupToScan);
    }
    this.isScanInProgress = false;
  }
}
