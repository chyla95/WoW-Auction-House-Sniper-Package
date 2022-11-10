import { IRealmResponse } from "./realm-response";
import { IHref, ILinks, IType } from "./response";
export interface IRealmGroupResponse {
    _links: ILinks;
    id: number;
    has_queue: boolean;
    status: IType;
    population: IType;
    realms: IRealmResponse[];
    mythic_leaderboards: IHref;
    auctions: IHref;
}
//# sourceMappingURL=realm-group-response.d.ts.map