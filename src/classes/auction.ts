import { convertToWowCurrency, IWowCurrency } from "../utilities/parsers/wow-currency";
import { IAuction } from "../services/requests/interfaces/auction-house-response";
import { AuctionItem } from "./auction-item";

export class Auction {
  readonly id: number;
  readonly item: AuctionItem;
  readonly bid: IWowCurrency;
  readonly buyout: IWowCurrency;
  readonly quantity: number;
  readonly timeLeft: string;

  constructor(auctionData: IAuction) {
    this.id = auctionData.id;
    this.item = new AuctionItem(auctionData.item);
    this.bid = convertToWowCurrency(auctionData.bid);
    this.buyout = convertToWowCurrency(auctionData.buyout);
    this.quantity = auctionData.quantity;
    this.timeLeft = auctionData.time_left;
  }
}
