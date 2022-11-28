import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

export interface IPS {
    staff_name: String,
    time_period: String,
    work_week: String,
    hours_worked: Number,
    team_hours_spent: Number,
    community_hours_spent: Number,
    train_PTO_hours_spent: Number
}

@Injectable()
export class IPSService {
    
    baseURL: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  getAllIPS(): Observable<IPS[]> {
    return this.http.get<IPS[]>(this.baseURL + 'ipslog/')
  }

  getIPS(name: string): Observable<IPS> {
    return this.http.get<IPS>(this.baseURL + 'ipslog/' + name)
  }

  insertIPS(body: IPS): Observable<IPS> {
    return this.http.post<IPS>(this.baseURL + 'ipslog/', body)
  }

  updateIPS(name: string, body: IPS): Observable<void> {
    return this.http.put<void>(
      this.baseURL + 'ipslog/' + body.staff_name,
      body
    )
  }

  deleteIPS(name: string) {
    return this.http.delete(this.baseURL + 'ipslog/' + name)
  }
}