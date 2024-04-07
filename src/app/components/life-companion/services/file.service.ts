import {Injectable} from '@angular/core';
import {HttpService} from "../../../shared/services/http.service";
import {FileSearchCriteria} from "../../../shared/models/file/file-search-criteria";
import {Observable} from "rxjs";
import {FileSearchResult} from "../../../shared/models/file/file-search-result";

@Injectable()
export class FileService extends HttpService {

  private readonly FILE_BASE_URL = "/telegram-files"

  public searchFiles(criteria: FileSearchCriteria): Observable<FileSearchResult> {
    return this.getEntity<FileSearchResult>(this.FILE_BASE_URL, criteria);
  }

  public downloadFile(fileId: string): Observable<any> {
    return this.getEntity<any>(`${this.FILE_BASE_URL}/${fileId}/download`, undefined, undefined);
  }

}
