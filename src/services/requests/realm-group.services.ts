import { RealmGroup } from "../../classes/realm-group";
import { Namespaces } from "../../utilities/helper-functions/battle-net-api-localization";
import { BattleNetApi, IRequestLocalization } from "../battle-net-api";

export const fetchRealmGroupById = async (id: number, localization: IRequestLocalization) => {
  const requestPath = `/data/wow/connected-realm/${id}`;
  const responseRaw = await BattleNetApi.fetchData(requestPath, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return new RealmGroup(responseRaw);
};

export const fetchRealmGroupByUrl = async (url: string, localization: IRequestLocalization) => {
  const responseRaw = await BattleNetApi.fetchData(url, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return new RealmGroup(responseRaw);
};
