export class Pageable {
  totalElements!: number;
  totalPages!: number;
  numberOfElements!: number
}

export class PageNavigate {
  direction?: Direction;
  pageNumber: number = 0;
  pageSize: number = 10;
}

export enum Direction {
  ASC = "ASC",
  DESC = "DESC"
}
