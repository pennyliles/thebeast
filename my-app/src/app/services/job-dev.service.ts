import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobDev } from '../models/job-dev.model';

const baseUrl = 'http://localhost:3000/jobDev';

@Injectable({
  providedIn: 'root'
})
export class JobDevService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<JobDev[]> {
    return this.http.get<JobDev[]>(baseUrl);
  }

  get(id: any): Observable<JobDev> {
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
