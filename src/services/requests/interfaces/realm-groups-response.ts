import { IHref, ILinks } from "./response";

export interface IRealmGroupsResponse {
  _links: ILinks;
  connected_realms: IHref[];
}
