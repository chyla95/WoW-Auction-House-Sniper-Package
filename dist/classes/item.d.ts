import { IRequestLocalization } from "../services/battle-net-api";
import { IItemResponse } from "../services/requests/interfaces/item-response";
export declare class Item {
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
    private readonly urls;
    constructor(itemData: IItemResponse);
    static fetchById(id: number, localization: IRequestLocalization): Promise<Item | undefined>;
    fetchIcon(localization: IRequestLocalization): Promise<string | undefined>;
    getQualityColorHexCode(): string;
}
//# sourceMappingURL=item.d.ts.map