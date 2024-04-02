import {Injectable} from '@angular/core';
import {HttpService} from "../../../shared/services/http.service";
import {PersonSearchResult} from "../../../shared/models/person/person-search-result";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class PersonServiceService extends HttpService {

  private readonly personBaseUrl = "/persons"


  public searchPersons(param: HttpParams): Observable<PersonSearchResult> {
    return this.getEntity<PersonSearchResult>(this.personBaseUrl, param);
  }

}
