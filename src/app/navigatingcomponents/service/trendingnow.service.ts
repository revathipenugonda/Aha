import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trendingnow } from '../models/trendingnow';

@Injectable({
  providedIn: 'root'
})
export class TrendingnowService {
  private baseurl="assets/trendingnow.json";
      constructor(private http:HttpClient) { }
      onsubmit():Observable<Trendingnow[]>{
        return this.http.get<Trendingnow[]>(this.baseurl);
      }
}
