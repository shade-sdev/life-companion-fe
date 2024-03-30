export interface TableModel {
  headers: Array<Header>
}

export interface Header {
  id: string;
  name: string;
  shown: boolean;
  filter: HeaderFilter<any>
}

export class HeaderFilter<T> {
  searchable!: boolean;
  searchType?: SearchType;
  enum?: Array<T>
}

export enum SearchType {
  TEXT, ENUM
}

export enum DefaultEnum {
  ALL = "All"
}
