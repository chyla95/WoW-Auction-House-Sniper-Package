/**
 * In the World of Warcraft Game Data and Profile APIs,
 * namespaces allow JSON documents to be published contextually in relation to a specific patch or point in time.
 * Additionally, they allow documents to be grouped by category, each of which has a different contract of use.
 *
 * Docs: https://develop.battle.net/documentation/world-of-warcraft/guides/namespaces
 */
export enum Namespaces {
  Static,
  Dynamic,
  Profile,
}

export const getNamespaceString = (namespace: Namespaces, region: Regions) => {
  switch (namespace) {
    case Namespaces.Static:
      return `static-${region}`;
    case Namespaces.Dynamic:
      return `dynamic-${region}`;
    case Namespaces.Profile:
      return `profile-${region}`;
  }
};

/**
 * API data is limited to specific regions. For example, US APIs accessed through us.battle.net only
 * contain data from US battlegroups and realms. Locale support is limited to locations supported on Blizzard community game sites.
 *
 * Docs: https://develop.battle.net/documentation/guides/regionality-and-apis
 */
export enum Regions {
  NorthAmerica = "us",
  Europe = "eu",
  Korea = "kr",
  Taiwan = "tw",
  China = "cn",
}

export const getRegionString = (region: Regions) => {
  return region;
};

/**
 * Language in which requested data will be returned
 *
 * Docs: https://develop.battle.net/documentation/world-of-warcraft/guides/localization
 */
export enum Locales {
  en_US = "en_US",
  es_MX = "es_MX",
  pt_BR = "pt_BR",
  de_DE = "de_DE",
  en_GB = "en_GB",
  es_ES = "es_ES",
  fr_FR = "fr_FR",
  it_IT = "it_IT",
  ru_RU = "ru_RU",
  ko_KR = "ko_KR",
  zh_TW = "zh_TW",
  zh_CN = "zh_CN",
}

export const getLocaleString = (locale: Locales) => {
  return locale;
};
