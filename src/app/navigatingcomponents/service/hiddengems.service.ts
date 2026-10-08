import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiddengems } from '../models/hiddengems';

@Injectable({
  providedIn: 'root'
})
export class HiddengemsService {
  private baseurl="assets/hiddengems.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Hiddengems[]>{
        return this.http.get<Hiddengems[]>(this.baseurl);
      }
}
