import { Realm } from "../../classes/realm";
import { Namespaces } from "../../utilities/helper-functions/battle-net-api-localization";
import { parseSlug } from "../../utilities/parsers/wow-realm-slug";
import { BattleNetApi, IRequestLocalization } from "../battle-net-api";

export const fetchRealmById = async (id: number, localization: IRequestLocalization) => {
  const requestPath = `/data/wow/realm/${id}`;
  const responseRaw = await BattleNetApi.fetchData(requestPath, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return new Realm(responseRaw);
};

export const fetchRealmByName = async (name: string, localization: IRequestLocalization) => {
  const requestPath = `/data/wow/realm/${parseSlug(name)}`;
  const responseRaw = await BattleNetApi.fetchData(requestPath, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return new Realm(responseRaw);
};

export const fetchRealmByUrl = async (url: string, localization: IRequestLocalization) => {
  const responseRaw = await BattleNetApi.fetchData(url, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return new Realm(responseRaw);
};
