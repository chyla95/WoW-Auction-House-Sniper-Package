import { IHref, ILinks } from "./response";
export interface IModifier {
    type: number;
    value: number;
}
export interface IAuctionItem {
    id: number;
    context: number;
    bonus_lists: number[];
    modifiers: IModifier[];
    pet_breed_id?: number;
    pet_level?: number;
    pet_quality_id?: number;
    pet_species_id?: number;
}
export interface IAuction {
    id: number;
    item: IAuctionItem;
    bid: number;
    buyout: any;
    quantity: number;
    time_left: string;
}
export interface IAuctionHouseResponse {
    _links: ILinks;
    connected_realm: IHref;
    auctions: IAuction[];
    commodities: IHref;
}
//# sourceMappingURL=auction-house-response.d.ts.map