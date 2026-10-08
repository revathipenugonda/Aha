import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostrewatchedgems } from '../models/mostrewatchedgems';

@Injectable({
  providedIn: 'root'
})
export class MostrewatchedgemsService {
  private baseurl="assets/mostrewatchedgems.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Mostrewatchedgems[]>{
        return this.http.get<Mostrewatchedgems[]>(this.baseurl);
      }
}
