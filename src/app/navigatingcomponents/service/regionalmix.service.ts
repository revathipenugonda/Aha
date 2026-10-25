import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regionalmix } from '../models/regionalmix';

@Injectable({
  providedIn: 'root'
})
export class RegionalmixService {
  private baseurl="http://localhost:8081/api/v1/regionalmixdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Regionalmix[]>{
        return this.http.get<Regionalmix[]>(this.baseurl);
      }
}
