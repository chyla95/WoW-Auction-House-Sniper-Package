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
exports.Item = void 0;
const item_services_1 = require("../services/requests/item.services");
const media_services_1 = require("../services/requests/media.services");
class Item {
    constructor(itemData) {
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
    static fetchById(id, localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, item_services_1.fetchItemById)(id, localization);
        });
    }
    fetchIcon(localization) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, media_services_1.fetchMediaByItemId)(this.id, localization);
        });
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
exports.Item = Item;
