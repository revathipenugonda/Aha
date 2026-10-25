import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Killertwists } from '../models/killertwists';

@Injectable({
  providedIn: 'root'
})
export class KillertwistsService {
  private baseurl="http://localhost:8081/api/v1/killertwistsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Killertwists[]>{
        return this.http.get<Killertwists[]>(this.baseurl);
      }
}
