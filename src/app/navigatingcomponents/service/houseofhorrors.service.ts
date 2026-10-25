import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Houseofhorrors } from '../models/houseofhorrors';

@Injectable({
  providedIn: 'root'
})
export class HouseofhorrorsService {
  private baseurl="http://localhost:8081/api/v1/houseofhorrorsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Houseofhorrors[]>{
        return this.http.get<Houseofhorrors[]>(this.baseurl);
      }
}
