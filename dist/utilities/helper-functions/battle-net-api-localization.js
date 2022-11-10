"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleString = exports.Locales = exports.getRegionString = exports.Regions = exports.getNamespaceString = exports.Namespaces = void 0;
/**
 * In the World of Warcraft Game Data and Profile APIs,
 * namespaces allow JSON documents to be published contextually in relation to a specific patch or point in time.
 * Additionally, they allow documents to be grouped by category, each of which has a different contract of use.
 *
 * Docs: https://develop.battle.net/documentation/world-of-warcraft/guides/namespaces
 */
var Namespaces;
(function (Namespaces) {
    Namespaces[Namespaces["Static"] = 0] = "Static";
    Namespaces[Namespaces["Dynamic"] = 1] = "Dynamic";
    Namespaces[Namespaces["Profile"] = 2] = "Profile";
})(Namespaces = exports.Namespaces || (exports.Namespaces = {}));
const getNamespaceString = (namespace, region) => {
    switch (namespace) {
        case Namespaces.Static:
            return `static-${region}`;
        case Namespaces.Dynamic:
            return `dynamic-${region}`;
        case Namespaces.Profile:
            return `profile-${region}`;
    }
};
exports.getNamespaceString = getNamespaceString;
/**
 * API data is limited to specific regions. For example, US APIs accessed through us.battle.net only
 * contain data from US battlegroups and realms. Locale support is limited to locations supported on Blizzard community game sites.
 *
 * Docs: https://develop.battle.net/documentation/guides/regionality-and-apis
 */
var Regions;
(function (Regions) {
    Regions["NorthAmerica"] = "us";
    Regions["Europe"] = "eu";
    Regions["Korea"] = "kr";
    Regions["Taiwan"] = "tw";
    Regions["China"] = "cn";
})(Regions = exports.Regions || (exports.Regions = {}));
const getRegionString = (region) => {
    return region;
};
exports.getRegionString = getRegionString;
/**
 * Language in which requested data will be returned
 *
 * Docs: https://develop.battle.net/documentation/world-of-warcraft/guides/localization
 */
var Locales;
(function (Locales) {
    Locales["en_US"] = "en_US";
    Locales["es_MX"] = "es_MX";
    Locales["pt_BR"] = "pt_BR";
    Locales["de_DE"] = "de_DE";
    Locales["en_GB"] = "en_GB";
    Locales["es_ES"] = "es_ES";
    Locales["fr_FR"] = "fr_FR";
    Locales["it_IT"] = "it_IT";
    Locales["ru_RU"] = "ru_RU";
    Locales["ko_KR"] = "ko_KR";
    Locales["zh_TW"] = "zh_TW";
    Locales["zh_CN"] = "zh_CN";
})(Locales = exports.Locales || (exports.Locales = {}));
const getLocaleString = (locale) => {
    return locale;
};
exports.getLocaleString = getLocaleString;
