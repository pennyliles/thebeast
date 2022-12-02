import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Closed } from '../models/closed.model';

const baseUrl = 'http://localhost:3000/closed';

@Injectable({
  providedIn: 'root'
})
export class ClosedService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Closed[]> {
    return this.http.get<Closed[]>(baseUrl);
  }

  get(id: any): Observable<Closed> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
