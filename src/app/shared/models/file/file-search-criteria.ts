import {PageNavigate} from "../common/pageable";

export class FileSearchCriteria extends PageNavigate {
  fileName?: string;
  fileSize?: string;
  date?: Date;
  sortBy?: FileSortBy;
}

export enum FileSortBy {
  FILE_NAME = 'FILE_NAME',
  UPLOADED_DATE = 'UPLOADED_DATE'
}
