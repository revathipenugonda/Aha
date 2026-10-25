import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thrillersandcrime } from '../models/thrillersandcrime';

@Injectable({
  providedIn: 'root'
})
export class ThrillersandcrimeService {
  private baseurl="http://localhost:8081/api/v1/thrillersandcrimedata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Thrillersandcrime[]>{
        return this.http.get<Thrillersandcrime[]>(this.baseurl);
      }
}
