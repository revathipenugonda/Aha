import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telugutimelessclassics } from '../models/telugutimelessclassics';

@Injectable({
  providedIn: 'root'
})
export class TelugutimelessclassicsService {
  private baseurl="http://localhost:8081/api/v1/telugutimelessclassicsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Telugutimelessclassics[]>{
        return this.http.get<Telugutimelessclassics[]>(this.baseurl);
      }
}
