"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
const setup_console_1 = require("./utilities/setup-console");
const battle_net_api_1 = require("./services/battle-net-api");
(0, setup_console_1.setupConsole)();
const ahSniper = {
    connect: (bnClientId, bnClientSecret) => __awaiter(void 0, void 0, void 0, function* () {
        return yield battle_net_api_1.BattleNetApi.connect(bnClientId, bnClientSecret);
    }),
};
exports.default = ahSniper;
__exportStar(require("./classes/item"), exports);
__exportStar(require("./classes/realm"), exports);
__exportStar(require("./classes/realm-group"), exports);
__exportStar(require("./utilities/helper-functions/battle-net-api-localization"), exports);
__exportStar(require("./classes/auction-house-scanner"), exports);
// const localization = { region: Regions.Europe, locale: Locales.en_GB };
// const realmsToScan = ["Draenor", "Burning legion", "Blackrock"];
// const itemIdsToFind = [
//   {
//     itemId: 80008,
//     maxPrice: 100000,
//   },
//   {
//     itemId: 70908,
//     maxPrice: 100000,
//   },
//   {
//     itemId: 65891,
//     maxPrice: 100000,
//   },
// ];
// const loopDelay = 5 * 60 * 1000;
// const realmGroupsToScan: RealmGroup[] = [];
// const itemsToFind: Item[] = [];
// let scanner: AuctionHouseScanner;
// let loopCount = 0;
// const loop = async () => {
//   // Every Loop
//   await scanner.scan(async (matchingAuctions, realmGroup) => {
//     for (const itemToFind of itemsToFind) {
//       const matchingAuctionsForTheGivenItemToFind = matchingAuctions.filter((auction) => {
//         return auction.item.id == itemToFind.id;
//       });
//       if (matchingAuctionsForTheGivenItemToFind.length < 1) continue;
//       const lowestPriceForTheGivenItemToFind = matchingAuctionsForTheGivenItemToFind.reduce((previous, current) => {
//         return previous.buyout.gold < current.buyout.gold ? previous : current;
//       });
//       const desiredItemPrice = itemIdsToFind.find((i) => {
//         return i.itemId == itemToFind.id;
//       })?.maxPrice;
//       if (lowestPriceForTheGivenItemToFind.buyout.gold > desiredItemPrice!) continue;
//       sendAuctionFoundEmbed(itemToFind, matchingAuctionsForTheGivenItemToFind.length, lowestPriceForTheGivenItemToFind.buyout.gold, realmGroup.getLabel());
//     }
//   });
//   loopCount++;
//   console.log(`Loop #${loopCount} completed! Sleeping...`);
//   await setTimeout(loopDelay);
// };
// const startApp = async () => {
//   if (!process.env.BATTLE_NET_CLIENT_ID) throw new Error("BATTLE_NET_CLIENT_ID was not provided!");
//   if (!process.env.BATTLE_NET_CLIENT_SECRET) throw new Error("BATTLE_NET_CLIENT_SECRET was not provided!");
//   // Create Scanner
//   scanner = new AuctionHouseScanner(realmGroupsToScan, itemsToFind, localization);
//   // Add Realms into the Scanner
//   console.info("Fetching realm groups data...");
//   for (const realmToScan of realmsToScan) {
//     const realm = await Realm.fetchByName(realmToScan, localization);
//     if (!realm) throw new Error("Could not fetch data for the following realm: " + realmGroupsToScan);
//     const realmGroup = await realm.fetchRealmGroup(localization);
//     if (!realmGroup) throw new Error("Could not fetch data for the following realm group: " + realmGroupsToScan);
//     scanner.addRealmGroup(realmGroup);
//   }
//   // Fetch Items
//   console.info("Fetching items data...");
//   for (const itemIdToFind of itemIdsToFind) {
//     const item = await Item.fetchById(itemIdToFind.itemId, localization);
//     if (!item) throw new Error("Could not fetch data for the following item: " + itemIdToFind);
//     itemsToFind.push(item);
//   }
//   // Main Loop
//   while (true) {
//     await loop();
//   }
// };
// startApp();
