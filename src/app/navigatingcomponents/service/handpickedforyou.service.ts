import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Handpickedforyou } from '../models/handpickedforyou';

@Injectable({
  providedIn: 'root'
})
export class HandpickedforyouService {
  private baseurl="http://localhost:8081/api/v1/handpickedforyoudata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Handpickedforyou[]>{
        return this.http.get<Handpickedforyou[]>(this.baseurl);
      }
}
