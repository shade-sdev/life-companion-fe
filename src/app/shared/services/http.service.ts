import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  private readonly baseUrl = "http://localhost:8080/api/v1";

  protected getEntity<T>(
    path: string,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    const url = `${this.baseUrl}${path}`;
    const options = {
      headers: headers ?? new HttpHeaders(),
      params: params ?? new HttpParams(),
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
}
