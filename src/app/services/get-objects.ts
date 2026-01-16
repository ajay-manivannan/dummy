import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetObjects {
  private readonly apiUrl = environment.apiUrl;

  getAPIUrl(): string {
    return this.apiUrl;
  }

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  getAllObjects(): Observable<any> {
    return this.httpClient.get(`${this.getAPIUrl()}/objects`);
  }

}
