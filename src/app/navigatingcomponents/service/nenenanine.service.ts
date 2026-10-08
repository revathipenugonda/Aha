import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nenenanine } from '../models/nenenanine';

@Injectable({
  providedIn: 'root'
})
export class NenenanineService {
  private baseurl="assets/nenenanine.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Nenenanine[]>{
        return this.http.get<Nenenanine[]>(this.baseurl);
      }
}
