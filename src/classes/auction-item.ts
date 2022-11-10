import { IRequestLocalization } from "../services/battle-net-api";
import { IAuctionItem } from "../services/requests/interfaces/auction-house-response";
import { fetchItemById } from "../services/requests/item.services";

export class AuctionItem {
  readonly id: number;

  constructor(auctionItemData: IAuctionItem) {
    this.id = auctionItemData.id;
  }

  async fetchDetails(localization: IRequestLocalization) {
    return await fetchItemById(this.id, localization);
  }
}
