import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actionarena } from '../models/actionarena';

@Injectable({
  providedIn: 'root'
})
export class ActionarenaService {
  private baseurl="http://localhost:8081/api/v1/actionarenadata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Actionarena[]>{
        return this.http.get<Actionarena[]>(this.baseurl);
      }
}
