import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Upcomingonaha } from '../models/upcomingonaha';

@Injectable({
  providedIn: 'root'
})
export class UpcomingonahaService {
  private baseurl="http://localhost:8081/api/v1/upcomingonahadata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Upcomingonaha[]>{
        return this.http.get<Upcomingonaha[]>(this.baseurl);
      }
}
