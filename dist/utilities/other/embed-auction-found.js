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
exports.sendAuctionFoundEmbed = void 0;
const discord_webhook_node_1 = require("discord-webhook-node");
const battle_net_api_localization_1 = require("../helper-functions/battle-net-api-localization");
let webhook;
const getWebhook = () => {
    if (!webhook)
        webhook = new discord_webhook_node_1.Webhook("https://discord.com/api/webhooks/1035210023292383242/dyvVV64n8FFY63LVAOhiN4aWkReRLDqVrjZzvtUVJrXar2gzVRGlUfBHU6TVqXMynDaP");
    return webhook;
};
const sendAuctionFoundEmbed = (item, itemCount, lowestPriceOfTheItem, realmGroupLabel) => __awaiter(void 0, void 0, void 0, function* () {
    const itemIcon = yield item.fetchIcon({ region: battle_net_api_localization_1.Regions.Europe, locale: battle_net_api_localization_1.Locales.en_GB });
    if (!itemIcon)
        return;
    const embed = new discord_webhook_node_1.MessageBuilder();
    embed.setTitle(":two_hearts: Auction Found: " + item.name + "!");
    embed.setThumbnail(itemIcon);
    embed.setDescription(item.description);
    embed.setColor(parseInt(item.getQualityColorHexCode().replace(/#/g, ""), 16));
    embed.addField("Auctions", itemCount.toString(), true);
    embed.addField("Lowest Price", Intl.NumberFormat().format(lowestPriceOfTheItem) + " :coin:", true);
    embed.addField("Realm Group", realmGroupLabel, true);
    embed.setTimestamp();
    yield getWebhook().send(embed);
});
exports.sendAuctionFoundEmbed = sendAuctionFoundEmbed;
