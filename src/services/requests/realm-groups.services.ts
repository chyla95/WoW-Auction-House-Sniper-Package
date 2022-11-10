import { IRealmGroupsResponse } from "./interfaces/realm-groups-response";
import { RealmGroup } from "../../classes/realm-group";
import { fetchRealmGroupByUrl } from "./realm-group.services";
import { RealmGroups } from "../../classes/realm-groups";
import { BattleNetApi, IRequestLocalization } from "../battle-net-api";
import { Namespaces } from "../../utilities/helper-functions/battle-net-api-localization";

const fetchRealmGroupsIndexData = async (localization: IRequestLocalization) => {
  const requestPath = `/data/wow/connected-realm/index`;
  const responseRaw = await BattleNetApi.fetchData(requestPath, Namespaces.Dynamic, localization);
  if (!responseRaw) return;

  return responseRaw as IRealmGroupsResponse;
};

export const fetchRealmGroupsData = async (localization: IRequestLocalization) => {
  const realmGroups: RealmGroup[] = [];

  const realmGroupsIndexResponseRaw = await fetchRealmGroupsIndexData(localization);
  if (!realmGroupsIndexResponseRaw) return;

  for (const realmGroupHref of realmGroupsIndexResponseRaw.connected_realms) {
    const realmGroup = await fetchRealmGroupByUrl(realmGroupHref.href, localization);
    if (!realmGroup) return;

    realmGroups.push(realmGroup);
  }

  return new RealmGroups(realmGroups);
};
