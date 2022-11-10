import { setupConsole } from "./utilities/setup-console";
import { BattleNetApi } from "./services/battle-net-api";

setupConsole();

const ahSniper = {
  connect: async (bnClientId: string, bnClientSecret: string) => {
    return await BattleNetApi.connect(bnClientId, bnClientSecret);
  },
};

export default ahSniper;

export * from "./classes/item";
export * from "./classes/realm";
export * from "./classes/realm-group";
export * from "./utilities/helper-functions/battle-net-api-localization";
export * from "./classes/auction-house-scanner";

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
