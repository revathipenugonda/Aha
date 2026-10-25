import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Highvoltage } from '../models/highvoltage';

@Injectable({
  providedIn: 'root'
})
export class HighvoltageService {
  private baseurl="http://localhost:8081/api/v1/highvoltagedata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Highvoltage[]>{
        return this.http.get<Highvoltage[]>(this.baseurl);
      }
}
