import {PageNavigate} from "../common/pageable";
import {AgeGroup, Gender} from "./person";

export class PersonSearchCriteria extends PageNavigate {
  firstName?: string | null;
  lastName?: string | null;
  gender?: Gender[] | null;
  ageGroup?: AgeGroup[] | null;
  sortBy?: PersonSortBy;
}

export enum PersonSortBy {
  FIRST_NAME = "FIRST_NAME",
  LAST_NAME = "LAST_NAME",
  GENDER = "GENDER",
  AGE_GROUP = "AGE_GROUP"
}
