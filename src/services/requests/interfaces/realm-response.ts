import { IHref, ILinks, IType } from "./response";

export interface IRegion {
  key: IHref;
  name: string;
  id: number;
}

export interface IRealmResponse {
  _links: ILinks;
  id: number;
  region: IRegion;
  connected_realm: IHref;
  name: string;
  category: string;
  locale: string;
  timezone: string;
  type: IType;
  is_tournament: boolean;
  slug: string;
}
