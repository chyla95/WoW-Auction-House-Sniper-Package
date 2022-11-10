import axios, { AxiosResponse } from "axios";
import { configurationBattleNetApi } from "../../configuration/configuration-battle-net";
import { IRequestLocalization } from "../../services/battle-net-api";
import { Namespaces, getLocaleString, getNamespaceString } from "./battle-net-api-localization";
import { isUrl } from "../validators/is-url";

export const fetchRawData = async (requestPathOrUrl: string, namespace: Namespaces, authToken: string, localization: IRequestLocalization) => {
  let requestUrl: string;
  if (isUrl(requestPathOrUrl)) {
    requestUrl = requestPathOrUrl;
  } else {
    const requestDomain = configurationBattleNetApi.apiDomain(localization.region);
    const requestPath = requestPathOrUrl;
    requestUrl = requestDomain + requestPath;
  }

  const localeParam = getLocaleString(localization.locale);
  const namespaceParam = getNamespaceString(namespace, localization.region);
  let responseRaw: AxiosResponse<any, any> | undefined;
  try {
    responseRaw = await axios.get(requestUrl, {
      params: {
        locale: localeParam,
        namespace: namespaceParam,
      },
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }

  if (!responseRaw) return;
  return responseRaw.data;
};
