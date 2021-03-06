import { Injectable } from '@angular/core';
import { Resource } from '../models/resource';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ResourceService<I, T extends Resource<I>> {
  endpoint!: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${API_BASE_URL}/${this.endpoint}`);
  }

  create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${API_BASE_URL}/${this.endpoint}`, item);
  }

  update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${API_BASE_URL}/${this.endpoint}/${item.id}`, item);
  }

  get(id: I): Observable<T> {
    return this.httpClient.get<T>(`${API_BASE_URL}/${this.endpoint}/${id}`);
  }

  delete(id: I) {
    return this.httpClient.delete(`${API_BASE_URL}/${this.endpoint}/${id}`);
  }

}
