import { IRequestLocalization } from "../services/battle-net-api";
import { IItemResponse } from "../services/requests/interfaces/item-response";
import { fetchItemById } from "../services/requests/item.services";
import { fetchMediaByItemId } from "../services/requests/media.services";

export class Item {
  readonly id: number;
  readonly name: string;
  readonly quality: string;
  readonly level: number;
  readonly required_level: number;
  readonly inventory_type: string;
  readonly purchase_price: number;
  readonly sell_price: number;
  readonly max_count: number;
  readonly is_equippable: boolean;
  readonly is_stackable: boolean;
  readonly description: string;
  readonly purchase_quantity: number;
  readonly itemClass: {
    name: string;
    url: string;
  };
  readonly itemSubclass: {
    name: string;
    url: string;
  };
  private readonly urls: {
    media: string;
  };

  constructor(itemData: IItemResponse) {
    this.id = itemData.id;
    this.name = itemData.name;
    this.quality = itemData.quality.name;
    this.level = itemData.level;
    this.required_level = itemData.required_level;
    this.inventory_type = itemData.inventory_type.name;
    this.purchase_price = itemData.purchase_price;
    this.sell_price = itemData.sell_price;
    this.max_count = itemData.max_count;
    this.is_equippable = itemData.is_equippable;
    this.is_stackable = itemData.is_stackable;
    this.description = itemData.description;
    this.purchase_quantity = itemData.purchase_quantity;
    this.itemClass = {
      name: itemData.item_class.name,
      url: itemData.item_class.key.href,
    };
    this.itemSubclass = {
      name: itemData.item_subclass.name,
      url: itemData.item_subclass.key.href,
    };
    this.urls = {
      media: itemData.media.key.href,
    };
  }

  static async fetchById(id: number, localization: IRequestLocalization) {
    return await fetchItemById(id, localization);
  }

  async fetchIcon(localization: IRequestLocalization) {
    return await fetchMediaByItemId(this.id, localization);
  }

  getQualityColorHexCode() {
    let color = "FFFFFF";
    switch (this.quality) {
      case "Poor":
        color = "#9d9d9d";
        break;
      case "Common":
        color = "#ffffff";
        break;
      case "Uncommon":
        color = "#1eff00";
        break;
      case "Rare":
        color = "#0070dd";
        break;
      case "Epic":
        color = "#a335ee";
        break;
      case "Legendary":
        color = "#ff8000";
        break;
      case "Artifact":
        color = "#e6cc80";
        break;
      case "Heirloom":
        color = "#00ccff";
        break;
      case "WoW Token":
        color = "#00ccff";
        break;
    }
    return color;
  }
}
