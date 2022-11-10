import { Namespaces } from "../../utilities/helper-functions/battle-net-api-localization";
import { BattleNetApi, IRequestLocalization } from "../battle-net-api";

export const fetchMediaByItemId = async (id: number, localization: IRequestLocalization) => {
  const requestPath = `/data/wow/media/item/${id}`;
  const responseRaw = await BattleNetApi.fetchData(requestPath, Namespaces.Static, localization);
  if (!responseRaw) return;

  const mediaUrl = responseRaw.assets[0].value as string;
  return mediaUrl;
};
