import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Handpickedforyou } from '../models/handpickedforyou';

@Injectable({
  providedIn: 'root'
})
export class HandpickedforyouService {
  private baseurl="assets/handpickedforyou.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Handpickedforyou[]>{
        return this.http.get<Handpickedforyou[]>(this.baseurl);
      }
}
