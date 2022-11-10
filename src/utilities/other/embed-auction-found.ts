import { MessageBuilder, Webhook } from "discord-webhook-node";
import { Item } from "../../classes/item";
import { Regions, Locales } from "../helper-functions/battle-net-api-localization";

let webhook: Webhook;

const getWebhook = () => {
  if (!webhook) webhook = new Webhook("https://discord.com/api/webhooks/1035210023292383242/dyvVV64n8FFY63LVAOhiN4aWkReRLDqVrjZzvtUVJrXar2gzVRGlUfBHU6TVqXMynDaP");
  return webhook;
};

export const sendAuctionFoundEmbed = async (item: Item, itemCount: number, lowestPriceOfTheItem: number, realmGroupLabel: string) => {
  const itemIcon = await item.fetchIcon({ region: Regions.Europe, locale: Locales.en_GB });
  if (!itemIcon) return;

  const embed = new MessageBuilder();
  embed.setTitle(":two_hearts: Auction Found: " + item.name + "!");
  embed.setThumbnail(itemIcon);
  embed.setDescription(item.description);
  embed.setColor(parseInt(item.getQualityColorHexCode().replace(/#/g, ""), 16));
  embed.addField("Auctions", itemCount.toString(), true);
  embed.addField("Lowest Price", Intl.NumberFormat().format(lowestPriceOfTheItem) + " :coin:", true);
  embed.addField("Realm Group", realmGroupLabel, true);
  embed.setTimestamp();

  await getWebhook().send(embed);
};
