import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
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
          obj[key].forEach((value: any) => {
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
