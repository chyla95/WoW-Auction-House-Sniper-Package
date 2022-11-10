"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const auction_house_scanner_1 = require("./classes/auction-house-scanner");
const item_1 = require("./classes/item");
const promises_1 = require("timers/promises");
const battle_net_api_localization_1 = require("./utilities/helper-functions/battle-net-api-localization");
const setup_console_1 = require("./utilities/setup-console");
const realm_1 = require("./classes/realm");
const embed_auction_found_1 = require("./utilities/other/embed-auction-found");
(0, setup_console_1.setupConsole)();
const test = () => "Howdy!";
exports.test = test;
const localization = { region: battle_net_api_localization_1.Regions.Europe, locale: battle_net_api_localization_1.Locales.en_GB };
const realmsToScan = ["Draenor", "Burning legion", "Blackrock"];
const itemIdsToFind = [
    {
        itemId: 80008,
        maxPrice: 100000,
    },
    {
        itemId: 70908,
        maxPrice: 100000,
    },
    {
        itemId: 65891,
        maxPrice: 100000,
    },
];
const loopDelay = 5 * 60 * 1000;
const realmGroupsToScan = [];
const itemsToFind = [];
let scanner;
let loopCount = 0;
const loop = () => __awaiter(void 0, void 0, void 0, function* () {
    // Every Loop
    yield scanner.scan((matchingAuctions, realmGroup) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        for (const itemToFind of itemsToFind) {
            const matchingAuctionsForTheGivenItemToFind = matchingAuctions.filter((auction) => {
                return auction.item.id == itemToFind.id;
            });
            if (matchingAuctionsForTheGivenItemToFind.length < 1)
                continue;
            const lowestPriceForTheGivenItemToFind = matchingAuctionsForTheGivenItemToFind.reduce((previous, current) => {
                return previous.buyout.gold < current.buyout.gold ? previous : current;
            });
            const desiredItemPrice = (_a = itemIdsToFind.find((i) => {
                return i.itemId == itemToFind.id;
            })) === null || _a === void 0 ? void 0 : _a.maxPrice;
            if (lowestPriceForTheGivenItemToFind.buyout.gold > desiredItemPrice)
                continue;
            (0, embed_auction_found_1.sendAuctionFoundEmbed)(itemToFind, matchingAuctionsForTheGivenItemToFind.length, lowestPriceForTheGivenItemToFind.buyout.gold, realmGroup.getLabel());
        }
    }));
    loopCount++;
    console.log(`Loop #${loopCount} completed! Sleeping...`);
    yield (0, promises_1.setTimeout)(loopDelay);
});
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.BATTLE_NET_CLIENT_ID)
        throw new Error("BATTLE_NET_CLIENT_ID was not provided!");
    if (!process.env.BATTLE_NET_CLIENT_SECRET)
        throw new Error("BATTLE_NET_CLIENT_SECRET was not provided!");
    // Create Scanner
    scanner = new auction_house_scanner_1.AuctionHouseScanner(realmGroupsToScan, itemsToFind, localization);
    // Add Realms into the Scanner
    console.info("Fetching realm groups data...");
    for (const realmToScan of realmsToScan) {
        const realm = yield realm_1.Realm.fetchByName(realmToScan, localization);
        if (!realm)
            throw new Error("Could not fetch data for the following realm: " + realmGroupsToScan);
        const realmGroup = yield realm.fetchRealmGroup(localization);
        if (!realmGroup)
            throw new Error("Could not fetch data for the following realm group: " + realmGroupsToScan);
        scanner.addRealmGroup(realmGroup);
    }
    // Fetch Items
    console.info("Fetching items data...");
    for (const itemIdToFind of itemIdsToFind) {
        const item = yield item_1.Item.fetchById(itemIdToFind.itemId, localization);
        if (!item)
            throw new Error("Could not fetch data for the following item: " + itemIdToFind);
        itemsToFind.push(item);
    }
    // Main Loop
    while (true) {
        yield loop();
    }
});
startApp();
