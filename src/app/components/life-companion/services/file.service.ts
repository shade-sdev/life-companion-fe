import {Injectable} from '@angular/core';
import {HttpService} from "../../../shared/services/http.service";
import {FileSearchCriteria} from "../../../shared/models/file/file-search-criteria";
import {Observable} from "rxjs";
import {FileSearchResult} from "../../../shared/models/file/file-search-result";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FileService extends HttpService {

  private readonly FILE_BASE_URL = "/telegram-files"

  constructor(private http: HttpClient) {
    super(http);
  }

  public searchFiles(criteria: FileSearchCriteria): Observable<FileSearchResult> {
    return this.getEntity<FileSearchResult>(this.FILE_BASE_URL, criteria);
  }

  downloadFile(id: string): Observable<{ blob: Blob, fileName: string }> {
    return this.getResource(`${this.FILE_BASE_URL}/${id}/download`);
  }

}
