import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpsLog } from '../models/ips-log.model';

const baseUrl = 'http://localhost:3000/ipslog';

@Injectable({
  providedIn: 'root'
})
export class IpslogService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IpsLog[]> {
    return this.http.get<IpsLog[]>(baseUrl);
  }

  get(id: any): Observable<IpsLog> {
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
