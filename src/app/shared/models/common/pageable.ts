export class Pageable {
  totalElements!: number;
  totalPages!: number;
  numberOfElements!: number
}

export class PageNavigate {
  direction?: Direction;
  pageNumber!: number;
  pageSize!: number;
}

export enum Direction {
  ASC = "ASC",
  DESC = "DESC"
}
