import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actionarena } from '../models/actionarena';

@Injectable({
  providedIn: 'root'
})
export class ActionarenaService {
  private baseurl="assets/actionarena.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Actionarena[]>{
        return this.http.get<Actionarena[]>(this.baseurl);
      }
}
