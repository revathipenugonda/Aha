import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laughterloaded } from '../models/laughterloaded';

@Injectable({
  providedIn: 'root'
})
export class LaughterloadedService {
  private baseurl="http://localhost:8081/api/v1/laughterloadeddata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Laughterloaded[]>{
        return this.http.get<Laughterloaded[]>(this.baseurl);
      }
}
