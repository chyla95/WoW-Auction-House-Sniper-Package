import { Item } from "../../classes/item";
import { configurationBattleNetApi } from "../../configuration/configuration-battle-net";
import { Namespaces } from "../../utilities/helper-functions/battle-net-api-localization";
import { IRequestLocalization, BattleNetApi } from "../battle-net-api";

export const fetchItemById = async (id: number, localization: IRequestLocalization) => {
  const requestPath = `${configurationBattleNetApi.apiDomain(localization.region)}/data/wow/item/${id}`;
  const responseRaw = await BattleNetApi.fetchData(requestPath, Namespaces.Static, localization);

  if (!responseRaw) return;

  return new Item(responseRaw);
};
