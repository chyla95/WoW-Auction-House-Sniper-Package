import { IHref, ILinks, IType } from "./response";
export interface IKeyId {
    key: IHref;
    id: number;
}
export interface IKeyIdName {
    key: IHref;
    name: string;
    id: number;
}
export interface ISpell {
    spell: IKeyIdName;
    description: string;
}
export interface IPreviewItem {
    item: IKeyId;
    quality: IType;
    name: string;
    media: IKeyId;
    item_class: IKeyIdName;
    item_subclass: IKeyIdName;
    inventory_type: IType;
    binding: IType;
    spells: ISpell[];
    is_subclass_hidden: boolean;
}
export interface IItemResponse {
    _links: ILinks;
    id: number;
    name: string;
    quality: IType;
    level: number;
    required_level: number;
    media: IKeyId;
    item_class: IKeyIdName;
    item_subclass: IKeyIdName;
    inventory_type: IType;
    purchase_price: number;
    sell_price: number;
    max_count: number;
    is_equippable: boolean;
    is_stackable: boolean;
    description: string;
    preview_item: IPreviewItem;
    purchase_quantity: number;
}
//# sourceMappingURL=item-response.d.ts.map