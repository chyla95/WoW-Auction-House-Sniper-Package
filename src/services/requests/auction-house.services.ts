import { AuctionHouse } from "../../classes/auction-house";
import { Namespaces } from "../../utilities/helper-functions/battle-net-api-localization";
import { IRequestLocalization, BattleNetApi } from "../battle-net-api";

export const fetchAuctionHouseByUrl = async (url: string, localization: IRequestLocalization) => {
  const responseRaw = await BattleNetApi.fetchData(url, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return new AuctionHouse(responseRaw);
};
