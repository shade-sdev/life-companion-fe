import {Pageable} from "../common/pageable";
import {Person} from "./person";

export class PersonSearchResult extends Pageable {
  elements?: Array<Person>
}
