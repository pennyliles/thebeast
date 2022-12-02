import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staffing } from '../models/staffing.model';

const baseUrl = 'http://localhost:3000/staffing';

@Injectable({
  providedIn: 'root'
})
export class StaffingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Staffing[]> {
    return this.http.get<Staffing[]>(baseUrl);
  }

  get(id: any): Observable<Staffing> {
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
