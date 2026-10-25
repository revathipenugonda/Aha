import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tamiltimelessclassics } from '../models/tamiltimelessclassics';

@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicsService {
  private baseurl="http://localhost:8081/api/v1/tamiltimelessclassicsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Tamiltimelessclassics[]>{
        return this.http.get<Tamiltimelessclassics[]>(this.baseurl);
      }
}
