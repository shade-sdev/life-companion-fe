import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  private readonly baseUrl = environment.baseApiPath;

  protected getEntity<T>(
    path: string,
    params?: any,
    headers?: HttpHeaders
  ): Observable<T> {

    const url = `${this.baseUrl}${path}`;
    const options = {
      headers: headers ?? new HttpHeaders(),
      params: this.objectToHttpParams(params) ?? new HttpParams(),
    };

    return this.httpClient.get<T>(url, options);
  }

  protected downloadResource(
    path: string,
    params?: any,
    headers?: HttpHeaders
  ): Observable<{ blob: Blob, fileName: string }> {
    const url = `${this.baseUrl}${path}`;
    return this.httpClient.get(url, {
      headers: headers ?? new HttpHeaders(),
      observe: 'response',
      params: this.objectToHttpParams(params) ?? new HttpParams(),
      responseType: 'blob',
      reportProgress: true
    }).pipe(
      map((response: HttpResponse<Blob>) => {
        const contentDispositionHeader = response.headers.get('Content-Disposition');
        const fileNameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = fileNameRegex.exec(contentDispositionHeader!);
        const fileName = matches && matches.length > 1 ? matches[1].replace(/['"]/g, '') : 'file';
        return {blob: new Blob([response.body!], {type: response.body!.type}), fileName: fileName};
      })
    );
  }

  protected uploadResource(
    path: string,
    body: any,
    params?: any,
    headers?: HttpHeaders
  ): Observable<HttpEvent<any>> {
    const url = `${this.baseUrl}${path}`;
    return this.httpClient.post<any>(url, body, {
      headers: headers ?? new HttpHeaders(),
      params: this.objectToHttpParams(params) ?? new HttpParams(),
      reportProgress: true,
      observe: 'events'
    });
  }

  protected postEntity<T>(
    path: string,
    body: any,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    const url = `${this.baseUrl}${path}`;

    const options = {
      headers: headers ?? new HttpHeaders(),
      params: params ?? new HttpParams(),
    };

    return this.httpClient.post<T>(url, body, options);
  }

  protected putEntity<T>(
    path: string,
    body: any,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    const url = `${this.baseUrl}${path}`;
    const options = {
      headers: headers ?? new HttpHeaders(),
      params: params ?? new HttpParams(),
    };

    return this.httpClient.put<T>(url, body, options);
  }

  protected deleteEntity<T>(
    path: string,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    const url = `${this.baseUrl}${path}`;
    const options = {
      headers: headers ?? new HttpHeaders(),
      params: params ?? new HttpParams(),
    };

    return this.httpClient.delete<T>(url, options);
  }

  private objectToHttpParams(obj: any): HttpParams {
    let params = new HttpParams();

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null && obj[key]?.length != 0) {
        if (Array.isArray(obj[key])) {
          obj[key].filter((it: any) => it != undefined).forEach((value: any) => {
            params = params.append(key, value.toString());
          });
        } else {
          params = params.set(key, obj[key].toString());
        }
      }
    }
    return params;
  }
}
