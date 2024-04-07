import {Injectable} from '@angular/core';
import {HttpService} from "../../../shared/services/http.service";
import {PersonSearchResult} from "../../../shared/models/person/person-search-result";
import {Observable} from "rxjs";
import {PersonSearchCriteria} from "../../../shared/models/person/person-search-criteria";

@Injectable()
export class PersonService extends HttpService {

  private readonly PERSON_BASE_URL = "/persons"

  public searchPersons(criteria: PersonSearchCriteria): Observable<PersonSearchResult> {
    return this.getEntity<PersonSearchResult>(this.PERSON_BASE_URL, criteria);
  }

}
