export interface TableModel {
  headers: Array<Header>
}

export interface Header {
  id: string;
  name: string;
  shown: boolean;
  filter: HeaderFilter
}

export class HeaderFilter {
  searchable!: boolean;
  searchType?: SearchType;
  translateKey?: string;
  enum?: Array<any>;
  value?: any;
}

export enum SearchType {
  TEXT, ENUM
}

export type AllType = 'ALL';

export const ALL = {
  ALL: 'ALL' as AllType
}
