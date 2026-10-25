import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inthespotlight } from '../models/inthespotlight';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
  private baseurl="http://localhost:8081/api/v1/inthespotlightdata";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<Inthespotlight[]>{
        return this.http.get<Inthespotlight[]>(this.baseurl);
      }
}
